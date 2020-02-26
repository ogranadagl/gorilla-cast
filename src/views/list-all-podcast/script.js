import api from '@/api';
import { getRandomPodcastCategory } from '@/utils';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';

export default {
  name: 'ListAllPodcast',
  data() {
    return {
      podcasts: [],
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
