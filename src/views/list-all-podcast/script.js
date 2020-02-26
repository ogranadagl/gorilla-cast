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
      initialPodcasts: [],
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    async filterPodcasts(term) {
      if (!term) {
        this.podcasts = [...this.initialPodcasts];
        return;
      }

      this.podcasts = this.initialPodcasts.filter((podcast) => {
        const track = podcast.trackName.toLowerCase();
        return track.includes(term.toLowerCase());
      });
    },
  },
  async created() {
    this.initialPodcasts = await api.search(
      this.$route.params.category || getRandomPodcastCategory(),
    );
    this.podcasts = [...this.initialPodcasts];
  },
};
