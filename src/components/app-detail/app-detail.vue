<template>
  <div>
    <v-card v-if="track.trackName" dark>
      <v-card-text class="d-flex flex-no-wrap justify-space-between">
        <v-card-title class="display-1">Detail</v-card-title>
      </v-card-text>
      <v-container>
        <v-row dense>
          <v-col cols="3">
            <v-avatar class="ma-3" size="125" tile>
              <img :src="track.artworkUrl100" :alt="track.trackName" />
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <dl>
              <dt>Name</dt>
              <dd class="font-weight-light">{{ track.trackName }}</dd>
              <dt>Artist</dt>
              <dd class="font-weight-light">{{ track.artistName }}</dd>
              <dt>Collection</dt>
              <dd class="font-weight-light">{{ track.collectionName }}</dd>
              <dt>Country</dt>
              <dd class="font-weight-light">{{ track.country }}</dd>
              <dt>Genre</dt>
              <dd class="font-weight-light">{{ track.primaryGenreName }}</dd>
            </dl>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <favorite-button :track="track" @click="clickFavorite" />
        <v-btn icon>
          <v-icon @click="playTrack(track)">mdi-play-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <router-link v-else class="white--text" text color="grey" :to="{ name: 'dashboard' }">
      Return home
    </router-link>
  </div>
</template>

<script src="./app-detail.js"></script>
<style lang="scss" src="./app-detail.scss" scoped></style>
