import { MESSAGE_PLAY_TRACK, MESSAGE_ADD_FAVORITE } from '@/utils/constants';

export default {
  name: 'app-detail',
  props: ['trackDetail'],
  methods: {
    addFavorite() {
      this.$emit(MESSAGE_ADD_FAVORITE, this.trackDetail);
    },
    playTrack() {
      this.$root.$emit(MESSAGE_PLAY_TRACK, this.trackDetail);
    },
  },
};
