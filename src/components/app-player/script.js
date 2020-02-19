import ARTWORK_IMAGE from '@/assets/image.png';
import { dateTimeToPlayTime } from '@/utils';
import { MESSAGE_PLAY_TRACK, UPDATE_INTERVAL, TIME_OFFSET_10 } from '@/utils/constants';

/* Base information to be used as track information */
const TRACK_INFO = {
  trackId: null,
  artistName: '',
  collectionName: '',
  trackName: '',
  previewUrl: null,
  artworkUrl100: ARTWORK_IMAGE,
};

export default {
  name: 'AppPlayer',
  data() {
    return {
      isPlaying: false,
      currentTrack: TRACK_INFO,
      currentTime: '00:00',
      sliderTime: 0,
      duration: 0,
    };
  },
  computed: {
    /**
     * Return the component header if is possible.
     */
    getTrackHeader() {
      if (this.currentTrack && this.currentTrack.trackId === TRACK_INFO.trackId) {
        return 'CHOOSE A SONG TO PLAY';
      }
      return 'YOU ARE PLAYING';
    },
    /**
     * Return the song information (artist - album) if is possible
     */
    getSongInfo() {
      if (this.currentTrack && this.currentTrack.trackId !== TRACK_INFO.trackId) {
        return `${this.currentTrack.artistName} - ${this.currentTrack.collectionName}`;
      }
      return '';
    },
    /**
     * Return true if the current trac info allow user to play something, else false.
     */
    isPlayEnabled() {
      return this.currentTrack.previewUrl;
    },
  },
  mounted() {
    this.$root.$on(MESSAGE_PLAY_TRACK, this.setPlayTrack);
    this.$refs.player.addEventListener('play', this.onReproductionStart);
    this.$refs.player.addEventListener('pause', this.onReproductionPause);
    this.$refs.player.addEventListener('ended', this.onReproductionEnds);
    this.$refs.player.addEventListener('canplay', this.onTrackReady);
    this.$refs.player.addEventListener('timeupdate', this.timeUpdate);
    window.audio1 = this.$refs.player;
  },
  methods: {
    /**
     * Modify component's current play track.
     * @param {trackInfo} track track information.
     */
    setPlayTrack(track) {
      if (track.trackId !== this.currentTrack.trackId) {
        this.pause();
        this.isPlaying = false;
        this.currentTrack = track;
        this.mustPlay = true;
      }
    },

    /**
     * Execute proper actions when the reproduction ends.
     */
    onReproductionStart() {
      this.isPlaying = true;
    },

    /**
     * Execute proper actions when the reproduction ends.
     */
    onReproductionEnds() {
      this.isPlaying = false;
      this.clearUpdateTimer();
      this.sliderTime = 0;
      this.currentTime = '00:00';
    },

    /**
     * Execute proper actions when the track is paused.
     */
    onReproductionPause() {
      this.isPlaying = false;
    },

    /**
     * Execute proper actions when the track is loaded.
     */
    onTrackReady() {
      this.updateVisibleTrackInfo();
      if (this.mustPlay) {
        this.mustPlay = false;
        this.togglePlayTrack();
      }
    },

    /**
     *Modify relevant information according current track.
     */
    updateVisibleTrackInfo() {
      this.duration = this.$refs.player.duration * UPDATE_INTERVAL;
      this.sliderTime = 0;
    },

    /**
     * Change the current play status
     */
    togglePlayTrack() {
      if (!this.isPlaying) {
        this.play();
      } else {
        this.pause();
      }
    },

    /**
     * Pause the current reproduction if is possible.
     */
    pause() {
      if (this.isPlaying && this.$refs.player) {
        this.$refs.player.pause();
      }
    },

    /**
     * Play the current track if is possible.
     */
    play() {
      if (!this.isPlaying && this.$refs.player) {
        this.$refs.player.play();
      }
    },

    /**
     * Action to be executed on time update
     */
    timeUpdate(event) {
      this.currentTime = dateTimeToPlayTime(event.target.currentTime);
      this.sliderTime = this.$refs.player.currentTime * UPDATE_INTERVAL;
    },

    /**
     * Go backward 10 seconds on the song.
     */
    goBackward10Seconds() {
      this.$refs.player.currentTime = Math.round(this.$refs.player.currentTime) - TIME_OFFSET_10;
    },

    /**
     * Go backward 10 seconds on the song.
     */
    goForward10Seconds() {
      this.$refs.player.currentTime = Math.round(this.$refs.player.currentTime) + TIME_OFFSET_10;
    },
  },
};
