<template>
  <div class="AppPlayer">
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey">
        <img :src="currentTrack.artworkUrl100" :alt="currentTrack.artistName" />
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline mb-4">{{ getTrackHeader }}</div>
        <v-list-item-title class="headline mb-1">{{ currentTrack.trackName }}</v-list-item-title>
        <v-list-item-subtitle>{{ getSongInfo }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-slider :readonly="true" :max="duration" :value="sliderTime" :label="currentTime" />
    <v-card-actions class="AppPlayer-actions">
      <v-btn text outlined :disabled="!isPlayEnabled" @click="goBackward10Seconds">
        <v-icon>mdi-rewind-10</v-icon>
      </v-btn>
      <v-btn v-if="!isPlaying" text outlined :disabled="!isPlayEnabled" @click="togglePlayTrack">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn v-if="isPlaying" text outlined @click="togglePlayTrack">
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn text outlined :disabled="!isPlayEnabled" @click="goForward10Seconds">
        <v-icon>mdi-fast-forward-10</v-icon>
      </v-btn>
    </v-card-actions>
    <audio ref="player" :src="currentTrack.previewUrl"></audio>
  </div>
</template>

<script src="./app-player.js"></script>
<style lang="scss" src="./app-player.scss" scoped></style>
