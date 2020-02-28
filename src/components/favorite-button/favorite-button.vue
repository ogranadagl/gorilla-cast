<template>
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <div @click.prevent.stop="handleToggleFavorite" v-on="on">
        <v-icon v-if="getFavoriteId(track)" color="yellow">mdi-star</v-icon>
        <v-icon v-else color="grey lighten-1">mdi-star-outline</v-icon>
      </div>
    </template>
    <span>{{ tooltipText }}</span>
  </v-tooltip>
</template>

<script src="./favorite-button.js"></script>
