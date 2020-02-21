<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <recentPodcast :track="track" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="5">
        <list-podcast :list="podcasts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import recentPodcast from '@/components/recent-podcast/recent-podcast.vue';
import api from '@/api';

export default {
  name: 'Dashboard',
  data() {
    return {
      podcasts: [],
      track: {},
    };
  },
  components: {
    ListPodcast,
    recentPodcast,
  },
  async mounted() {
    const results = await api.search('software');
    this.podcasts = results;
    this.track = results.shift();
  },
};
</script>

<style lang="scss"></style>
