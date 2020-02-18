import { MESSAGE_PLAY_TRACK, MESSAGE_ADD_FAVORITE } from '@/utils/constants';

export default {
  name: 'app-detail',
  props: ['trackDetail'],
  methods: {
    addFavorite(track) {
      this.$emit(MESSAGE_ADD_FAVORITE, track);
    },
    playTrack(track) {
      this.$root.$emit(MESSAGE_PLAY_TRACK, track);
    },
  },
};
