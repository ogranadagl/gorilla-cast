import { isNil } from 'ramda';
import api from '@/api';
import TrackDetail from '@/components/track-detail/track-detail.vue';
import { addAndRemove, allFavorites } from '@/store/modules/favorites/utils';
import { mapFavoriteTrack } from '@/utils/mapFavoritesToList';

export default {
  name: 'Detail',
  components: {
    TrackDetail,
  },
  data() {
    return {
      snackbar: false,
      track: {},
      trackId: 0,
    };
  },
  methods: {
    ...addAndRemove(),
    async fetchData() {
      this.$store.dispatch('favorites/fetchFavorites');
      this.trackId = Number(this.$route.params.id);
      this.snackbar = false;
      if (isNaN(this.trackId)) {
        this.snackbar = true;
        return;
      }
      this.track = mapFavoriteTrack(this.favorites, await api.lookup(this.trackId));
      if (isNil(this.track)) {
        this.track = {};
        this.snackbar = true;
      }
    },
    updatePodcastList() {
      console.log('executed');
      this.track = mapFavoriteTrack(this.favorites, this.track);
    },
  },
  computed: {
    ...allFavorites(),
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route() {
      this.track = {};
      this.fetchData();
    },
    favorites: {
      handler() {
        this.updatePodcastList();
      },
      deep: true,
    },
  },
};
