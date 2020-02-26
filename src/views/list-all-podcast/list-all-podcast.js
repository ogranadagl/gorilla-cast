import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils';
import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import { DETAIL_PATH } from '@/router/index'; // FIXME: Remove

export default {
  name: 'ListAllPodcast',
  data() {
    return {
      podcastList: [],
      podcastListFiltered: [],
      detailPath: DETAIL_PATH, // FIXME: Remove
    };
  },
  components: {
    ListPodcast,
  },
  methods: {
    async filterPodcasts(term) {
      const termSanitized = term.toLowerCase().trim();
      this.podcastListFiltered = filterBySearchTerm(termSanitized, this.podcastList);
    },
  },
  async created() {
    this.podcastList = await api.search(
      this.$route.params.category || getRandomPodcastCategory(),
    );
    this.podcastListFiltered = [...this.podcastList];
  },
};
