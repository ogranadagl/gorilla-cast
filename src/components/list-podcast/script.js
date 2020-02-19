import SearchInput from '@/components/search-input/search-input.vue';

export default {
  name: 'ListPodcast',
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    getSubTitle(artistName, genreName) {
      return `${artistName} -  ${genreName}`;
    },
    searchTrack(track) {
      this.$emit('search-track', track);
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    listTitle: {
      type: String,
      default: 'All Podcasts',
    },
  },
  components: {
    'search-input': SearchInput,
  },
};
