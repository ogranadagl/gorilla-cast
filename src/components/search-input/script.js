export default {
  name: 'SearchInput',
  methods: {
    change(track) {
      if (track) {
        this.$emit(this.changeEvent, track);
      }
    },
    keypress(e) {
      this.$emit(this.keypressEvent, e.srcElement.value);
    },
  },
  props: {
    changeEvent: {
      type: String,
      default: '',
    },
    keypressEvent: {
      type: String,
      default: '',
    },
  },
};
