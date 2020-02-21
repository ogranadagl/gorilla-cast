import SearchInput from '@/components/search-input/search-input.vue';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';

export default {
  name: 'FavoriteList',
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
    setFavorite(trackId, isFavorite) {
      console.log(trackId, isFavorite);
      // code set a track favorite property
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
    FavoriteButton,
  },
};
