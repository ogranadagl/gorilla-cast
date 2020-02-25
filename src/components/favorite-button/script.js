import { isEmpty } from 'ramda';

import { MESSAGE_ADD_FAVORITE, MESSAGE_REMOVE_FAVORITE } from '@/utils/constants';

export default {
  name: 'FavoriteButton',
  props: {
    track: {
      type: Object,
      required: true,
      default: {},
    },
  },
  computed: {
    tooltipText() {
      return this.track.meta.favoriteId ? 'Remove favorite' : 'Add favorite';
    },
  },
  methods: {
    handleToggleFavorite() {
      if (isEmpty(this.track)) {
        return;
      }

      const emitMessage = this.track.meta.favoriteId
        ? MESSAGE_REMOVE_FAVORITE
        : MESSAGE_ADD_FAVORITE;

      this.$emit('click', emitMessage, this.track);
    },
  },
};
