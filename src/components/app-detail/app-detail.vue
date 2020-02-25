<template>
  <div>
    <v-card v-if="trackDetail.trackName" dark>
      <v-card-text class="d-flex flex-no-wrap justify-space-between">
        <v-card-title class="display-1">Detail</v-card-title>
      </v-card-text>
      <v-container>
        <v-row dense>
          <v-col cols="3">
            <v-avatar class="ma-3" size="125" tile>
              <img :src="trackDetail.artworkUrl100" :alt="trackDetail.trackName" />
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <dl>
              <dt>Name</dt>
              <dd class="font-weight-light">{{ trackDetail.trackName }}</dd>

              <dt>Artist</dt>
              <dd class="font-weight-light">{{ trackDetail.artistName }}</dd>

              <dt>Collection</dt>
              <dd class="font-weight-light">{{ trackDetail.collectionName }}</dd>

              <dt>Country</dt>
              <dd class="font-weight-light">{{ trackDetail.country }}</dd>

              <dt>Genre</dt>
              <dd class="font-weight-light">{{ trackDetail.primaryGenreName }}</dd>
            </dl>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <favorite-button @click="clickFavorite" :track="trackDetail" />

        <v-btn icon>
          <v-icon
            @click="playTrack(trackDetail)"
            :color="trackDetail.active ? 'deep-purple accent-4' : 'grey'"
            >mdi-play-circle-outline
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <router-link class="white--text" text color="grey" to="/" v-else>
      Return home
    </router-link>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./styles.scss" scoped></style>
