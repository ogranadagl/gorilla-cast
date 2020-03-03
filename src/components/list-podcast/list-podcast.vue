<template>
  <v-card :width="listWidth" class="mx-auto">
    <v-toolbar v-show="toolbar" color="green" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <search-input :disabled="list.length === 0" @change="searchTrack" />
    </v-toolbar>

    <v-list two-line width="100%">
      <v-list-item-group v-if="list.length > 0" v-model="selected">
        <template v-for="(item, index) in list">
          <v-list-item :key="item.trackId" :to="{ name: 'details', params: { id: item.trackId } }">
            <v-list-item-action>
              <v-list-item-avatar>
                <v-img :alt="item.trackName" :src="item.artworkUrl30" />
              </v-list-item-avatar>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.trackName" />
              <v-list-item-subtitle v-text="getSubTitle(item.artistName, item.primaryGenreName)" />
            </v-list-item-content>

            <v-list-item-action>
              <favorite-button :track="item" @click="clickFavorite" />
            </v-list-item-action>

            <v-list-item-action>
              <v-icon @click.prevent.stop="playTrack(item)">mdi-play-circle-outline </v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider v-if="index + 1 < list.length" :key="prefix + item.trackId"></v-divider>
        </template>
      </v-list-item-group>

      <v-list-item-group v-else>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="noContentLabel" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-footer v-show="footer && to" color="success" class="font-weight-medium">
        <v-col class="text-right" cols="12">
          <v-btn :to="to" text color="white" :disabled="list.length === 0">{{ moreLabel }}</v-btn>
        </v-col>
      </v-footer>
    </v-list>
  </v-card>
</template>

<script src="./list-podcast.js"></script>
