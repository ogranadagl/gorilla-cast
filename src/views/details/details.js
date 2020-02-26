/* eslint-disable no-restricted-globals */

import { isNil } from 'ramda';

import api from '@/api';
import AppDetail from '@/components/app-detail/app-detail.vue';

export default {
  name: 'Detail',
  components: {
    AppDetail,
  },
  data() {
    return {
      snackbar: false,
      track: {},
      trackId: 0,
    };
  },
  async mounted() {
    this.trackId = Number(this.$route.params.id);
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
