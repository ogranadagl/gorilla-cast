/* eslint-disable class-methods-use-this, no-console */

import {
  append,
  compose,
  filter,
  find,
  propEq,
  reject,
  uniq,
} from 'ramda';
import uuidv4 from 'uuid/v4';

import {
  API_ENDPOINT,
  KeyNames,
  lookupData,
  searchData,
} from './constants';
import { readKey, saveKey, validateEmptyKey } from './utils';

/**
 * @typedef Reviews
 * @type {array}
 * @property {string} 0 - attribute name.
 * @property {string} 1 - value to set.
 */

class Api {
  /**
   * Search podcasts given a term
   * @param  {String} term - Term to search
   * @param  {Boolean} isMocked - Mock data to avoid API faults
   * @link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api#searchexamples
   * @return {Object} results given by API
   */
  async search(term, isMocked) {
    if (isMocked) {
      console.warn('Search data was mocked!');
      return filter(propEq('isStreamable', true), searchData);
    }

    const response = await fetch(
      `${API_ENDPOINT}/search?media=music&term=${term}`,
    );
    const { results } = await response.json();
    return filter(propEq('isStreamable', true), results);
  }

  /**
   * Lookup request to search for content in the stores based on iTunes
   * @param  {Int} artistId - id to search
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
    return find(propEq('trackId', trackId), results) || {};
  }

  /**
   * Get favorites list
   * @return {number[]} Favorites list
   */
  getFavorites() {
    return readKey(KeyNames.favorites, []);
  }

  /**
   * Add favorite
   * @param  {} id - Id to add
   * @return {number[]} Favorites list
   */
  addFavorite(id) {
    validateEmptyKey(id, 'id');

    return compose(saveKey(KeyNames.favorites), uniq, append(id), this.getFavorites)();
  }

  /**
   * Remove favorites id
   * @param  {} id - Id to remove
   * @return {number[]} Favorites list
   */
  removeFavorite(id) {
    validateEmptyKey(id, 'id');

    return compose(
      saveKey(KeyNames.favorites),
      reject((favoriteId) => favoriteId === id),
      this.getFavorites,
    )();
  }

  /**
   * Get reviews list
   * @return {Reviews} Reviews list
   */
  getReviews() {
    return readKey(KeyNames.reviews, []);
  }

  /**
   * Get reviews list by podcast id
   * @param {String|Number} podcastId - Podcast Id
   * @return {Reviews} Reviews list
   */
  getReviewsByPodcastId(podcastId) {
    validateEmptyKey(podcastId, 'podcastId');

    return compose(
      filter(propEq('podcastId', podcastId)),
      this.getReviews,
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
  addReview({ comment = null, podcastId, stars }) {
    validateEmptyKey(podcastId, 'podcastId');
    validateEmptyKey(stars, 'stars');

    return compose(
      saveKey(KeyNames.reviews),
      append({
        id: uuidv4(), // side effect, this is for simplicity
        comment,
        podcastId,
        stars,
      }),
      this.getReviews,
    )();
  }

  /**
   * Removes a podcast's review
   * @param  {String} id - ID to be removed
   * @return {Reviews} Reviews list
   */
  removeReview(id) {
    validateEmptyKey(id, 'id');

    return compose(
      saveKey(KeyNames.reviews),
      reject(propEq('id', id)),
      this.getReviews,
    )();
  }
}

const api = new Api();

if (process.browser && process.ENV !== 'production') {
  window.api = api;
}

export default api;
