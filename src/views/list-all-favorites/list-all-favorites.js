import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import TrackList from '@/components/track-list/track-list.vue';
import { addAndRemove, allFavorites } from '@/store/modules/favorites/utils';

export default {
  name: 'ListAllFavorites',
  components: {
    TrackList,
  },
  data() {
    return {
      favoriteListFiltered: [],
    };
  },
  computed: {
    ...allFavorites(),
  },
  methods: {
    ...addAndRemove(),
    filterFavorites(term) {
      this.favoriteListFiltered = filterBySearchTerm(term, this.favorites);
    },
    updatePodcastList() {
      this.favoriteListFiltered = this.favorites;
    },
  },
  watch: {
    favorites: {
      handler() {
        this.updatePodcastList();
      },
      deep: true,
    },
  },
  async mounted() {
    this.$store.dispatch('favorites/fetchFavorites');
    this.favoriteListFiltered = [...this.favorites];
  },
};
