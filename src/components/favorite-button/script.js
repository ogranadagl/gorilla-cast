import { isEmpty, pathOr } from 'ramda';

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
      pathOr(null, ['track', 'meta', 'favoriteId']);
      return this.getFavoriteId(this.track) ? 'Remove favorite' : 'Add favorite';
    },
  },
  methods: {
    handleToggleFavorite() {
      if (isEmpty(this.track)) {
        return;
      }

      const emitMessage = this.getFavoriteId(this.track)
        ? MESSAGE_REMOVE_FAVORITE
        : MESSAGE_ADD_FAVORITE;

      this.$emit('click', emitMessage, this.track);
    },
    getFavoriteId(track) {
      return pathOr(null, ['meta', 'favoriteId'], track);
    },
  },
};
