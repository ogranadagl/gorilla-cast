import SearchInput from '@/components/search-input/search-input.vue';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';
import { MESSAGE_PLAY_TRACK, MESSAGE_TOGGLE_FAVORITE, MESSAGE_SEARCH_TRACK } from '@/utils/constants';

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
      this.$emit(MESSAGE_SEARCH_TRACK, track);
    },
    playTrack(track) {
      this.$root.$emit(MESSAGE_PLAY_TRACK, track);
    },
    toggleFavorite(track) {
      this.$emit(MESSAGE_TOGGLE_FAVORITE, track);
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
