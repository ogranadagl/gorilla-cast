import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
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
      favoriteListFiltered: [],
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    async filterFavorites(term) {
      const termSanitized = term.toLowerCase().trim();
      this.favoriteListFiltered = filterBySearchTerm(termSanitized, this.favorites);
    },
  },
  async mounted() {
    this.favorites = api.getFavoritesTracks(maxListItems);
    this.favoriteListFiltered = [...this.favorites];
  },
};
