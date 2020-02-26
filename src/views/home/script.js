import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import recentPodcast from '@/components/recent-podcast/recent-podcast.vue';
import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import { DEFAULT_PODCAST_FILTER_PARAMS } from '@/utils/constants';
import { DETAIL_PATH } from '@/router/index';

import { assocPath, map } from 'ramda';

const maxListItems = 5;

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
      favorites: [],
      category: '',
      track: {},
      detailPath: DETAIL_PATH,
    };
  },
  computed: {
    toList() {
      return `/list/${this.category}`;
    },
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
      // eslint-disable-next-line arrow-parens
      const listMapper = track => assocPath(['meta', 'favoriteId'], api.favoriteId(track), track);
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
    recentPodcast,
  },
  async created() {
    this.category = getRandomPodcastCategory();
    const results = await api.search(this.category, this.getSearchParams());
    this.podcasts = results;
    this.track = results.shift();
    this.favorites = api.getFavoritesTracks(maxListItems);
  },
};
