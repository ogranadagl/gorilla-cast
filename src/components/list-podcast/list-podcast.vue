<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar v-show="toolbar" color="green" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <search-input :keypressEvent="'search-track'" @search-track="searchTrack" />
    </v-toolbar>

    <v-list two-line flat>
      <v-list-item-group v-model="selected">
        <template v-for="(item, index) in list">
          <v-list-item :key="item.trackId">
            <v-list-item-action>
              <v-list-item-avatar>
                <v-img :alt="item.trackName" :src="item.artworkUrl30" />
              </v-list-item-avatar>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.trackName" />
              <v-list-item-subtitle v-text="getSubTitle(item.artistName, item.primaryGenreName)" />
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon
                @click="addFavorite(item.trackId)"
                :color="item.active ? 'deep-purple accent-4' : 'grey'"
              >mdi-star-outline</v-icon>
              <v-spacer />
              <v-icon
                @click="playTrack(item.trackId)"
                :color="item.active ? 'deep-purple accent-4' : 'grey'"
              >mdi-play-circle-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider v-if="index + 1 < list.length" :key="prefix+item.trackId"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script src="./script.js"></script>
