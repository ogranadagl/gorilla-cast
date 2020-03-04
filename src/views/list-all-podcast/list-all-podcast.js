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
    async filterPodcasts(term) {
      this.podcastListFiltered = filterBySearchTerm(term, this.podcastList);
    },
  },
  async mounted() {
    this.podcastList = await api.search(this.$route.params.category || getRandomPodcastCategory());
    this.podcastListFiltered = [...this.podcastList];
  },
};
