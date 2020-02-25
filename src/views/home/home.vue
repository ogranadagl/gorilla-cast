<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../../assets/logo.png" />
    </div>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <list-podcast
            to="/favorites"
            :list="favorites"
            @add-favorite="addFavorite"
            @remove-favorite="removeFavorite"
            title="Favorites"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <list-podcast
            to="/list"
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

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" scoped></style>
