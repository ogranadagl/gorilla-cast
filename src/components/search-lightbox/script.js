import Search from '@/components/search/search.vue';
import api from '@/api';

export default {
  name: 'SearchLightbox',
  components: {
    Search,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      term: null,
      results: [],
    };
  },
  methods: {
    async search() {
      this.loading = true;
      const results = await api.search(this.term);
      this.results = results;
      this.dialog = results.length > 0;
      this.loading = false;
    },
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.results = [];
        this.term = null;
        this.loading = false;
      }
    },
  },
};
