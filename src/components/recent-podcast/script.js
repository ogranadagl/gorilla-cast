import { MESSAGE_PLAY_TRACK, MESSAGE_ADD_FAVORITE } from '@/utils/constants';

export default {
  name: 'recent-podcast',
  props: ['track'],
  methods: {
    addFavorite() {
      this.$emit(MESSAGE_ADD_FAVORITE, this.track);
    },
    playTrack() {
      this.$root.$emit(MESSAGE_PLAY_TRACK, this.track);
    },
  },
};
