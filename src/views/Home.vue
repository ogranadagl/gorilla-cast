<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <list-podcast
      :list="podcasts"
      @search-track="filterPodcasts"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import api from '@/api';

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
      lastTerm: null,
    };
  },
  methods: {
    filterPodcasts(term) {
      api.search(term).then((response) => {
        this.podcasts = response;
        this.lastTerm = term;
      });
    },
    toggleFavorite(track) {
      if (track.isFavorited) {
        debugger;
        api.removeFavorite(track.trackId);
      } else {
        api.addFavorite(track);
      }
      this.filterPodcasts(this.lastTerm);
    },
  },
  components: {
    ListPodcast,
  },
  mounted() {
    this.filterPodcasts('software');
  },
};
</script>

<style lang='scss'>
.home {
  text-align: center;
}
</style>
