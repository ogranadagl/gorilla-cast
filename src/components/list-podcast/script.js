import SearchInput from '@/components/search-input/search-input.vue';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';
import { MESSAGE_PLAY_TRACK, MESSAGE_SEARCH_TRACK } from '@/utils/constants';

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
    clickFavorite(emitMessage, track) {
      this.$emit(emitMessage, track);
    },
    playTrack(track) {
      this.$root.$emit(MESSAGE_PLAY_TRACK, track);
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
    listWidth: {
      type: String,
      default: '100%',
    },
    to: {
      type: Object,
    },
    noContentLabel: {
      type: String,
      default: 'There is nothing to show.',
    },
  },
  components: {
    FavoriteButton,
    SearchInput,
  },
};
