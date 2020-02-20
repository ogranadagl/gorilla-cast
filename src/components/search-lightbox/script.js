import api from '@/api';
import ListPodcast from '@/components/list-podcast/list-podcast.vue';
import SearchInput from '@/components/search-input/search-input.vue';

export default {
  name: 'SearchLightbox',
  components: {
    ListPodcast,
    SearchInput,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      results: [],
    };
  },
  methods: {
    async searchTracks(term) {
      this.loading = true;
      const results = await api.search(term);
      this.results = results;
      this.dialog = results.length > 0;
      this.loading = false;
    },
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.loading = false;
        this.results = [];
        this.$refs['search-input'].reset();
      }
    },
  },
};
