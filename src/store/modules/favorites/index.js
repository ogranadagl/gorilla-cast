import api from '@/api';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FETCH_FAVORITES,
  SET_FAVORITES,
  ALL_FAVORITES,
} from './types';

const initialState = {
  favorites: [],
};
const getters = {
  [ALL_FAVORITES]: state => state.favorites.map(favorite => ({ ...favorite, favoriteId: true })),
  allFavoritesLimit: state => limit => {
    const favorites = state.favorites
      .map(favorite => ({ ...favorite, favoriteId: true }))
      .slice(0, limit);
    return favorites;
  },
};
const actions = {
  [FETCH_FAVORITES]({ commit }) {
    const favorites = api.getFavoritesTracks();
    commit(SET_FAVORITES, favorites);
  },
  [ADD_FAVORITE]({ commit }, favorite) {
    const favorites = api.addFavorite(favorite);
    commit(SET_FAVORITES, favorites);
  },
  [REMOVE_FAVORITE]({ commit }, favorite) {
    const favorites = api.removeFavorite(favorite.meta.favoriteId);
    commit(SET_FAVORITES, favorites);
  },
};
const mutations = {
  [SET_FAVORITES]: (state, favorites) => {
    state.favorites = favorites;
  },
  [ADD_FAVORITE]: (state, favorite) => {
    state.favorites = [...state.favorites, favorite];
  },
  [REMOVE_FAVORITE]: (state, favorite) => {
    state.favorites = state.favorites.filter(
      currentFavorite => currentFavorite.trackId !== favorite.trackId
    );
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
