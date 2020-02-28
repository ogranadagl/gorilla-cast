const initialState = {
  favorites: [],
};
const getters = {
  allFavorites: (state) => state.favorites.map((favorite) => ({ ...favorite, favoriteId: true })),
  allFavoritesLimit: (state) => (limit) => {
    const favorites = state.favorites
      .map((favorite) => ({ ...favorite, favoriteId: true }))
      .slice(0, limit);
    return favorites;
  },
};
const actions = {
  addFavorite({ commit }, favorite) {
    commit('addFavorite', favorite);
  },
  removeFavorite({ commit }, favorite) {
    commit('removeFavorite', favorite);
  },
};
const mutations = {
  addFavorite: (state, favorite) => {
    state.favorites = [...state.favorites, favorite];
  },
  removeFavorite: (state, favorite) => {
    state.favorites = state.favorites.filter(
      (currentFavorite) => currentFavorite.trackId !== favorite.trackId,
    );
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};