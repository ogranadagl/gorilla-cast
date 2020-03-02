import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';

export default {
  name: 'ListAllPodcast',
  components: {
    TrackList,
  },
  data() {
    return {
      podcastList: [],
      podcastListFiltered: [],
    };
  },
  methods: {
    ...addAndRemove(),
    updatePodcastList() {
      this.podcastListFiltered = mapFavoritesToList(this.favorites, this.podcastListFiltered);
    },
    filterPodcasts(term) {
      const podcasts = filterBySearchTerm(term, this.podcastList);
      this.podcastListFiltered = mapFavoritesToList(this.favorites, podcasts);
    },
  },
  async mounted() {
    this.$store.dispatch('favorites/fetchFavorites');
    this.podcastList = await api.search(
      this.$route.params.category || getRandomPodcastCategory(),
      true
    );
    this.podcastListFiltered = mapFavoritesToList(this.favorites, this.podcastList);
  },
};
