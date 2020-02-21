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

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
    };
  },
  methods: {
    filterPodcasts(term) {
      api.search(term).then((res) => {
        this.podcasts = res;
      });
    },
  },
  components: {
    ListPodcast,
  },
  created() {
    api.search('software').then((res) => {
      this.podcasts = res;
    });
  },
};
</script>

<style lang='scss'>
.home {
  text-align: center;
}
</style>
