<template>
  <div class="list">
    <h1>List All Podcasts</h1>
    <list-podcast :list="podcasts" @search-track="filterPodcasts" :footer="false" width="90%"/>
  </div>
</template>

<script>
import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';

export default {
  name: 'List',
  data() {
    return {
      podcasts: [],
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    filterPodcasts(term) {
      api.search(term).then((res) => {
        this.podcasts = res;
      });
    },
  },
  created() {
    api.search('software').then((res) => {
      this.podcasts = res;
    });
  },
};
</script>

<style scoped>
  .list h1{
    text-align: center;
  }
</style>
