/* eslint-disable no-underscore-dangle */

import {
  any,
  append,
  assoc,
  compose,
  filter,
  head,
  ifElse,
  isEmpty,
  isNil,
  map,
  omit,
  or,
  pathEq,
  prop,
  propEq,
  reject,
  take,
  uniq,
} from 'ramda';
import { denormalize, normalize } from 'normalizr';
import deepmerge from 'deepmerge';
import queryString from 'query-string';
import uuidv4 from 'uuid/v4';

import { favoritesSchema, reviewSchema } from './normalizr';
import {
  API_ENDPOINT,
  DEFAULT_STATE,
  KeyNames,
  lookupData,
  searchData,
} from './constants';
import {
  isNotValidSearchOptions,
  isStreamable,
  readLocalStorage,
  saveLocalStorage,
  validateEmptyKey,
} from './utils';

/**
 * @typedef Reviews
 * @type {array}
 * @property {string} 0 - attribute name.
 * @property {string} 1 - value to set.
 */

class Api {
  constructor() {
    this._state = readLocalStorage(KeyNames.state, DEFAULT_STATE);

    this.mapFavoritedProperty = map((track) => assoc('isFavorited', this.isFavorited(track), track));
  }

  /**
   * Search podcasts given a term
   * @param  {String} term - Term to search
   * @param  {Object} options - Query options
   * @param  {Boolean} isMocked - Mock data to avoid API faults
   * @link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api#searchexamples
   * @return {Object} results given by API
   */
  async search(term, options = {}, isMocked) {
    const defaultOptions = {
      limit: 30,
      media: 'music',
    };

    const opts = { ...defaultOptions, ...options, term };

    if (isNotValidSearchOptions(opts)) {
      throw new Error('Search "options" parameter are not valid');
    }

    const { limit } = opts;

    if (limit < 1 || limit > 200) {
      throw new Error('limit outside paramaters');
    }

    let results = [];

    if (isMocked) {
      console.warn('Search data was mocked!');
      results = searchData;
    } else {
      const parsedQueryString = queryString.stringify(opts);
      const response = await fetch(`${API_ENDPOINT}/search?${parsedQueryString}`);
      ({ results } = await response.json());
    }

    return compose(
      this.mapFavoritedProperty,
      isStreamable,
      take(limit), // Helpfull when data is mocked
    )(results);
  }

  /**
   * Lookup request to search for content in the stores based on iTunes
   * @param  {Int} trackId - id to search
   * @param  {Boolean} isMocked - Mock data to avoid API faults
   * @link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api#lookup
   * @return {Object} results given by API
   */
  async lookup(trackId, isMocked) {
    if (isMocked) {
      console.warn('Lookup data was mocked!');
      return lookupData;
    }

    const response = await fetch(`${API_ENDPOINT}/lookup?id=${trackId}`);
    const { results = [] } = await response.json();

    return compose(
      head,
      ifElse(
        isNil,
        () => ({}),
        this.mapFavoritedProperty,
      ),
      filter(propEq('trackId', trackId)),
    )(results);
  }

  /**
   * Get favorites list
   * @return {Track[]} Favorites list
   */
  getFavorites() {
    return denormalize(this.state.favorites, [favoritesSchema], this.entities);
  }

  /**
   * Add favorite
   * @param  {} track - track entity
   * @return {number[]} Favorites list
   */
  addFavorite(track) {
    if (isNil(track) || isEmpty(track) || isNil(track.trackId)) {
      throw new Error('Wrong track entity');
    }

    const favorite = {
      id: uuidv4(), // side effect, this is for simplicity
      track,
    };

    const { result, entities } = normalize(favorite, favoritesSchema);

    const favorites = compose(
      uniq,
      append(result),
    )(this.state.favorites);

    this.state = {
      ...deepmerge(this.state, { entities }),
      favorites,
    };

    return favorites;
  }

  /**
   * Remove favorites id
   * @param  {} id - Id to remove
   * @return {Track[]} Favorites list
   */
  removeFavorite(id) {
    validateEmptyKey(id, 'id');

    const favorites = reject((favoriteId) => favoriteId === id, this.state.favorites);

    this.state = {
      ...this.state,
      entities: this.removeEntityById('favorites', id),
      favorites,
    };

    return favorites;
  }

  /**
   * Get reviews list
   * @return {Reviews} Reviews list
   */
  getReviews() {
    return denormalize(this.state.reviews, [reviewSchema], this.entities) || [];
  }

  /**
   * Get reviews list by track id
   * @param {String|Number} trackId - Podcast Id
   * @return {Reviews} Reviews list
   */
  getReviewsByTrackId(trackId) {
    validateEmptyKey(trackId, 'trackId');

    return compose(
      map(omit(['track'])),
      filter(pathEq(['track', 'trackId'], trackId)),
      this.getReviews.bind(this),
    )();
  }

  /**
   * Add podcast's review
   * @param  {Object} options
   * @param  {String} options.comment - Review's comment
   * @param  {String} options.podcastId  - Podcast Id where the review belongs
   * @param  {Number} options.stars - Rating given by the user
   * @return {Reviews} Reviews list
   */
  addReview({ comment = null, track, stars }) {
    validateEmptyKey(track, 'track');
    validateEmptyKey(stars, 'stars');

    if (isEmpty(track) || isNil(track.trackId)) {
      throw new Error('Wrong track entity');
    }

    const id = uuidv4(); // side effect, this is for simplicity

    const review = {
      id,
      comment,
      track,
      stars,
    };

    const { entities } = normalize(review, reviewSchema);

    const reviews = compose(
      uniq,
      append(id),
    )(this.state.reviews);

    this.state = {
      ...deepmerge(this.state, { entities }),
      reviews,
    };

    return reviews;
  }

  /**
   * Removes a podcast's review
   * @param  {String} id - ID to be removed
   * @return {Reviews} Reviews list
   */
  removeReview(id) {
    validateEmptyKey(id, 'id');

    const reviews = reject((favoriteId) => favoriteId === id, this.state.reviews);

    this.state = {
      ...this.state,
      entities: this.removeEntityById('reviews', id),
      reviews,
    };

    return reviews;
  }

  set state(state) {
    this._state = state;
    saveLocalStorage(KeyNames.state, state);
  }

  get state() {
    return this._state;
  }

  get entities() {
    return this._state.entities;
  }

  removeEntityById(entity, id) {
    return {
      ...this.state.entities,
      [entity]: omit([id], this.state.entities[entity]),
    };
  }

  isFavorited(track) {
    return compose(
      ifElse(
        or(isEmpty, isNil(prop('trackId'))),
        () => false,
        compose(
          any(pathEq(['track', 'trackId'], prop('trackId', track))),
          this.getFavorites.bind(this),
        ),
      ),
    )(track);
  }
}

const api = new Api();

if (process.browser && process.ENV !== 'production') {
  window.api = api;
}

export default api;
