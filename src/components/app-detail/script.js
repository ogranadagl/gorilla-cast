import FavoriteButton from '@/components/favorite-button/favorite-button.vue';
import { MESSAGE_PLAY_TRACK } from '@/utils/constants';

export default {
  name: 'app-detail',
  props: ['track'],
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
