<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar color="green" dark>
      <v-toolbar-title>{{ listTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <search-input :keypressEvent="'search-track'" @search-track="searchTrack" />
    </v-toolbar>

    <v-list two-line flat>
      <v-list-item-group v-model="selected">
        <template v-for="(item, index) in list">
          <v-list-item :key="item.title">
            <v-list-item-action>
              <v-list-item-avatar>
                <v-img :src="item.artworkUrl100"></v-img>
              </v-list-item-avatar>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.trackName"></v-list-item-title>
              <v-list-item-subtitle v-html="getSubTitle(item.artistName, item.primaryGenreName)" />
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon
                @click="$emit('add-favorite', item.trackId)"
                :color="item.active ? 'deep-purple accent-4' : 'grey'"
              >mdi-star-outline</v-icon>
              <v-spacer></v-spacer>
              <v-icon
                @click="$emit('play-track', item.trackId)"
                :color="item.active ? 'deep-purple accent-4' : 'grey'"
              >mdi-play-circle-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider v-if="index + 1 < list.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script src="./script.js"></script>
