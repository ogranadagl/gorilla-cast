<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <recentPodcast
            :track="track"
            @add-favorite="addFavorite"
            @remove-favorite="removeFavorite"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <list-podcast
            :list="favoriteListFiltered"
            :to="whereTo('favorites')"
            no-content-label="Please add a favorite track"
            title="Favorites"
            @add-favorite="addFavorite"
            @remove-favorite="removeFavorite"
            @search-track="filterFavorites"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <list-podcast
            :to="whereTo('list')"
            :list="podcastListFiltered"
            @add-favorite="addFavorite"
            @remove-favorite="removeFavorite"
            @search-track="filterPodcasts"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./home.js"></script>

<style src="./home.scss" lang="scss" scoped></style>
