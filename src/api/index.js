/* eslint-disable class-methods-use-this */

import {
  append,
  compose,
  filter,
  propEq,
  reject,
  uniq,
} from 'ramda';
import uuidv4 from 'uuid/v4';

import { API_ENDPOINT, KeyNames } from './constants';
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
   * @return {Object} results given by API
   */
  async search(term) {
    const response = await fetch(
      `${API_ENDPOINT}/search?media=podcast&entity=podcast&term=${term}`,
    );
    const { results } = await response.json();
    return results;
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
      reject((favoriteId) => favoriteId !== id),
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
