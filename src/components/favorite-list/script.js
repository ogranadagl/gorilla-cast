import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';

export default {
  name: 'FavoriteList',

  data() {
    return {
      podcasts: [],
    };
  },

  created() {
    /* api.search('software').then(response => {
      this.podcasts = response;
    }); */
    this.podcasts = api.getFavorites();
  },

  components: {
    ListPodcast,
  },
};
