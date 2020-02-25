import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import recentPodcast from '@/components/recent-podcast/recent-podcast.vue';
import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import { DEFAULT_PODCAST_FILTER_PARAMS } from '@/utils/constants';

export default {
  name: 'Dashboard',
  data() {
    return {
      podcasts: [],
      track: {},
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
  },
  components: {
    ListPodcast,
    recentPodcast,
  },
  async mounted() {
    const results = await api.search(getRandomPodcastCategory(), this.getSearchParams());
    this.podcasts = results;
    this.track = results.shift();
  },
};
