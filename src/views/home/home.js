import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import recentPodcast from '@/components/recent-podcast/recent-podcast.vue';
import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import { DEFAULT_PODCAST_FILTER_PARAMS } from '@/utils/constants';

import { assocPath, map, head } from 'ramda';

const maxListItems = 5;

export default {
  name: 'Home',
  data() {
    return {
      podcasts: [],
      initialPodcasts: [],
      initialFavorites: [],
      favorites: [],
      category: '',
      track: {},
      podcastListFiltered: [],
      favoriteListFiltered: [],
    };
  },
  methods: {
    filterPodcasts(term) {
      this.podcastListFiltered = filterBySearchTerm(term, this.podcasts);
    },
    async filterFavorites(term) {
      this.favoriteListFiltered = filterBySearchTerm(term, this.favorites);
    },
    getSearchParams() {
      return {
        ...DEFAULT_PODCAST_FILTER_PARAMS,
      };
    },
    updatePodcastList() {
      const listMapper = (track) => assocPath(['meta', 'favoriteId'], api.favoriteId(track), track);
      this.podcastListFiltered = map(listMapper, this.podcasts);
    },
    addFavorite(track) {
      this.favoriteListFiltered = api.addFavorite(track, maxListItems);
    },
    removeFavorite(track) {
      this.favoriteListFiltered = api.removeFavorite(track.meta.favoriteId, maxListItems);
    },
    whereTo(route) {
      if (route === 'favorites') {
        return {
          path: route,
        };
      }
      return {
        name: route,
        params: this.category,
      };
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
  async mounted() {
    this.category = getRandomPodcastCategory();
    this.initialPodcasts = await api.search(this.category, this.getSearchParams());
    this.track = head(this.initialPodcasts);
    this.podcasts = [...this.initialPodcasts];
    this.favorites = api.getFavoritesTracks(maxListItems);
    this.favoriteListFiltered = [...this.favorites];
    this.podcastListFiltered = [...this.podcasts];
  },
};
