<template>
  <div>
    <div class='home'>
      <img alt='Vue logo' src='../assets/logo.png' />
    </div>
    <ListPodcast />
  </div>
</template>

<script>
// @ is an alias to /src

import ListPodcast from '@/components/list-podcast/list-podcast.vue';

export default {
  name: 'Home',
  components: {
    ListPodcast,
  },
};
</script>

<style lang='scss'>
.home {
  text-align: center;
}
</style>
