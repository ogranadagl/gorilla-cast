import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';

const maxListItems = 100;

export default {
  name: 'ListAllFavorites',
  data() {
    return {
      favorites: [],
      favoriteListFiltered: [],
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    async filterFavorites(term) {
      this.favoriteListFiltered = filterBySearchTerm(term, this.favorites);
    },
  },
  async mounted() {
    this.favorites = api.getFavoritesTracks(maxListItems);
    this.favoriteListFiltered = [...this.favorites];
  },
};
