import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';

const MAX_LIST_ITEMS = 100;

export default {
  name: 'ListAllFavorites',
  components: {
    TrackList,
  },
  data() {
    return {
      detailPath: DETAIL_PATH,
      favoriteListFiltered: [],
    };
  },
  methods: {
    filterFavorites(term) {
      this.favoriteListFiltered = filterBySearchTerm(term, this.favorites);
    },
  },
  async mounted() {
    this.favorites = api.getFavoritesTracks(MAX_LIST_ITEMS);
    this.favoriteListFiltered = [...this.favorites];
  },
};
