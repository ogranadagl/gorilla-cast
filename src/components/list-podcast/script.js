import SearchInput from '@/components/search-input/search-input.vue';

export default {
  name: 'ListPodcast',
  data() {
    return {
      selected: false,
      prefix: 'divider-',
    };
  },
  methods: {
    getSubTitle(artistName, genreName) {
      return `${artistName} -  ${genreName}`;
    },
    searchTrack(track) {
      this.$emit('search-track', track);
    },
    addFavorite(trackId) {
      this.$emit('add-favorite', trackId);
    },
    playTrack(trackId) {
      this.$emit('play-track', trackId);
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'All Podcasts',
    },
  },
  components: {
    SearchInput,
  },
};
