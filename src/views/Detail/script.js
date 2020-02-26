import AppDetail from '@/components/app-detail/app-detail.vue';
import api from '@/api';
import { isNil } from 'ramda';

export default {
  name: 'Detail',
  components: {
    AppDetail,
  },
  data() {
    return {
      track: {},
      snackbar: false,
      trackId: 0,
    };
  },
  async mounted() {
    this.trackId = Number(this.$route.params.id);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(this.trackId)) {
      this.snackbar = true;
      return;
    }
    this.track = await api.lookup(this.trackId);
    if (isNil(this.track)) {
      this.track = {};
      this.snackbar = true;
    }
  },
};
