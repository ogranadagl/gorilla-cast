import { MESSAGE_PLAY_TRACK } from '@/utils/constants';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';

export default {
  name: 'app-detail',
  props: {
    track: {
      default: {},
      required: true,
      type: Object,
    },
  },
  methods: {
    clickFavorite(emitMessage, track) {
      this.$emit(emitMessage, track);
    },
    playTrack() {
      this.$root.$emit(MESSAGE_PLAY_TRACK, this.track);
    },
  },
  components: {
    FavoriteButton,
  },
};
