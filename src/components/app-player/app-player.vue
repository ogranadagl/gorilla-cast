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
    <v-slider
      :readonly="true"
      :max="duration"
      :value="sliderTime"
      :label="currentTime"
    />
    <v-card-actions class="AppPlayer-actions">
      <v-btn text outlined @click="goBackward10Seconds" :disabled="!isPlayEnabled">
        <v-icon>mdi-rewind-10</v-icon>
      </v-btn>
      <v-btn text outlined @click="togglePlayTrack" v-if="!isPlaying" :disabled="!isPlayEnabled">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn text outlined @click="togglePlayTrack" v-if="isPlaying">
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn text outlined @click="goForward10Seconds" :disabled="!isPlayEnabled">
        <v-icon>mdi-fast-forward-10</v-icon>
      </v-btn>
    </v-card-actions>
    <audio ref="player" :src="currentTrack.previewUrl"></audio>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./styles.scss"></style>
