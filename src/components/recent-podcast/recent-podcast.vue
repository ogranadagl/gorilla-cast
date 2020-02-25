<template>
  <v-card dark :to="`detail/${track.trackId}`">
    <v-card-text class="d-flex flex-no-wrap justify-space-between">
      <v-card-title class="display-1">Last podcast</v-card-title>
    </v-card-text>
    <v-container>
      <v-row dense>
        <v-col cols="3">
          <v-avatar class="ma-3" size="125" tile>
            <img :src="track.artworkUrl100" :alt="track.trackName" />
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <section>
            <h3 class="font-weight-light">
              {{ track.trackName }}
            </h3>
          </section>
          <section>
            <h3 class="font-weight-light">
              {{ track.artistName }}
            </h3>
          </section>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer />
      <v-btn icon>
        <v-icon
          @click.prevent.stop="addFavorite"
          :color="track.active ? 'deep-purple accent-4' : 'grey'"
          >mdi-star-outline
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon
          @click.prevent.stop="playTrack"
          :color="track.active ? 'deep-purple accent-4' : 'grey'"
          >mdi-play-circle-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./script.js"></script>
