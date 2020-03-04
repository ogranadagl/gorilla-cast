import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';
import { addAndRemove, allFavorites } from '@/store/modules/favorites/utils';
import { mapFavoritesToList } from '@/utils/mapFavoritesToList';

export default {
  name: 'ListAllPodcast',
  components: {
    TrackList,
  },
  data() {
    return {
      podcastList: [],
      podcastSearch: '',
    };
  },
  methods: {
    ...addAndRemove(),
    updatePodcastList() {
      this.podcastList = mapFavoritesToList(this.favorites, this.podcastList);
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
  computed: {
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcastList);
    },
    ...allFavorites(),
  },
  async mounted() {
    this.$store.dispatch('favorites/fetchFavorites');
    this.podcastList = await api.search(
      this.$route.params.category || getRandomPodcastCategory(),
      true,
    );
  },
};
