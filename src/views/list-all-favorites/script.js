import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import { DETAIL_PATH } from '@/router/index';

const maxListItems = 100;

export default {
  name: 'ListAllFavorites',
  data() {
    return {
      favorites: [],
      detailPath: DETAIL_PATH,
    };
  },
  components: {
    ListPodcast,
  },
  async mounted() {
    this.favorites = api.getFavoritesTracks(maxListItems);
  },
};
