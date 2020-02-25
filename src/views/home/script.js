import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import { DEFAULT_PODCAST_FILTER_PARAMS } from '@/utils/constants';

import { assocPath, map } from 'ramda';

const maxListItems = 5;

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
      favorites: [],
    };
  },
  methods: {
    async filterPodcasts(term) {
      this.podcasts = await api.search(term, this.getSearchParams());
    },
    getSearchParams() {
      return {
        ...DEFAULT_PODCAST_FILTER_PARAMS,
      };
    },
    updatePodcastList() {
      const listMapper = (track) => assocPath(['meta', 'favoriteId'], api.favoriteId(track), track);
      this.podcasts = map(listMapper, this.podcasts);
    },
    addFavorite(track) {
      this.favorites = api.addFavorite(track, maxListItems);
    },
    removeFavorite(track) {
      this.favorites = api.removeFavorite(track.meta.favoriteId, maxListItems);
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
  components: {
    ListPodcast,
  },
  async created() {
    this.podcasts = await api.search(getRandomPodcastCategory(), this.getSearchParams());
    this.favorites = api.getFavoritesTracks(maxListItems);
  },
};
