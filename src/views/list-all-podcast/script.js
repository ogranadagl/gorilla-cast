import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import { DETAIL_PATH } from '@/router/index';

export default {
  name: 'ListAllPodcast',
  data() {
    return {
      podcasts: [],
      detailPath: DETAIL_PATH,
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    async filterPodcasts(term) {
      this.podcasts = await api.search(term);
    },
  },
  async created() {
    this.podcasts = await api.search(this.$route.params.category || getRandomPodcastCategory());
  },
};
