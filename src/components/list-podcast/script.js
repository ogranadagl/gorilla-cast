import SearchInput from '@/components/search-input/search-input.vue';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';

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
    toggleFavorite(track) {
      console.log('toggleFavorite', track);
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
    toolbar: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    moreLabel: {
      type: String,
      default: 'More...',
    },
  },
  components: {
    SearchInput,
    FavoriteButton,
  },
};
