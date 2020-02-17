<template>
  <v-list-item>
    <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    <v-list-item-content>
      <div class="overline mb-4">YOU ARE PLAYING</div>
      <v-list-item-title class="headline mb-1">A Super Podcast</v-list-item-title>
      <v-list-item-subtitle>A simple piece of information about a Podcast</v-list-item-subtitle>
    </v-list-item-content>
    <div>
      <v-btn text>
        <v-icon>mdi-skip-previous-circle-outline</v-icon>
      </v-btn>
      <v-btn text @click.stop="isPlaying = !isPlaying" v-if="isPlaying">
        <v-icon>mdi-play-circle-outline</v-icon>
      </v-btn>
      <v-btn text @click.stop="isPlaying = !isPlaying" v-if="!isPlaying">
        <v-icon>mdi-pause-circle-outline</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-skip-next-circle-outline</v-icon>
      </v-btn>
    </div>
  </v-list-item>
</template>

<script src="./script.js"></script>
