<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar color="green" dark>
      <v-toolbar-title>All Podcasts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group v-model="selected" multiple active-class="pink--text">
        <template v-for="(item, index) in podcasts">
          <v-list-item :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.artworkUrl100"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.trackName"></v-list-item-title>
              <v-list-item-subtitle
                v-html="getSubTitle(item.artistName, item.primaryGenreName)"
              />
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-heart</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider v-if="index + 1 < podcasts.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script src="./script.js"></script>
