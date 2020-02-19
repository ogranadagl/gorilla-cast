<template>
  <div>
    <div class='home'>
      <img alt='Vue logo' src='../assets/logo.png' />
    </div>
    <list-podcast :list="podcasts" />
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
  components: {
    'list-podcast': ListPodcast,
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
