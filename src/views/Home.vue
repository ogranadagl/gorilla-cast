<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <list-podcast :list="podcasts" @search-track="filterPodcasts" />
  </div>
</template>

<script>
// @ is an alias to /src

import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import { DEFAULT_PODCAST_FILTER_PARAMS } from '@/utils/constants';

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
    };
  },
  methods: {
    async filterPodcasts(term) {
      this.podcasts = await api.search(term, this.getSearchParams());
    },
    getSearchParams() {
      return {
        ...DEFAULT_PODCAST_FILTER_PARAMS,
      };
    },
  },
  components: {
    ListPodcast,
  },
  async created() {
    this.podcasts = await api.search(getRandomPodcastCategory(), this.getSearchParams());
  },
};
</script>

<style lang="scss">
.home {
  text-align: center;
}
</style>
