<template>
  <div class="list">
    <h1>List All Favorites</h1>
    <list-podcast
      :detailPath="detailPath"
      :footer="false"
      :list="favoriteListFiltered"
      @search-track="filterFavorites"
      listWidth="90%"
      title="Favorites"
    />
  </div>
</template>

<script src="./list-all-favorites.js"></script>

<style src="./list-all-favorites.scss" lang="scss" scoped></style>
