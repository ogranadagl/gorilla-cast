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
            to="/favorites"
            :detailPath="detailPath"
            :list="favorites"
            @add-favorite="addFavorite"
            @remove-favorite="removeFavorite"
            @search-track="filterFavorites"
            title="Favorites"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <list-podcast
            :to="toList"
            :detailPath="detailPath"
            :list="podcasts"
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
