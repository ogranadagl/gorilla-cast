import SearchInput from '@/components/search-input/search-input.vue';
import { MESSAGE_PLAY_TRACK, MESSAGE_ADD_FAVORITE, MESSAGE_SEARCH_TRACK } from '@/utils/constants';

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
    addFavorite(track) {
      this.$emit(MESSAGE_ADD_FAVORITE, track);
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
    width: {
      type: String,
      default: '500',
    },
  },
  components: {
    SearchInput,
  },
};
