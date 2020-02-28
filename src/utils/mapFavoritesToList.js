export const mapFavoriteTrack = (favorites, track) => ({
  ...track,
  favoriteId: favorites.find((favorite) => favorite.trackId === track.trackId) !== undefined,
});

export const mapFavoritesToList = (favorites, list) => {
  const mappedList = list.map((item) => mapFavoriteTrack(favorites, item));
  return mappedList;
};
