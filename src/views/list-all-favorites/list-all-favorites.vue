<template>
  <div>
    <h1 class="title">Favorites</h1>
    <list-podcast
      :footer="false"
      :list="favoriteListFiltered"
      list-width="90%"
      no-content-label="Favorite list is empty"
      title=""
      @search-track="filterFavorites"
    />
  </div>
</template>

<script src="./list-all-favorites.js"></script>
<style lang="scss" src="./list-all-favorites.scss" scoped></style>
