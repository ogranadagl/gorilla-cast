import { sanitizeText } from '@/utils';

export default {
  name: 'SearchInput',
  methods: {
    changeTerm(term) {
      const parsedTerm = sanitizeText(term);
      if (!parsedTerm) {
        return;
      }
      if (this.change) {
        this.change(parsedTerm);
      }
      this.$emit(this.changeEvent, parsedTerm);
    },
    keypress(event) {
      this.$emit(this.keypressEvent, event.srcElement.value);
    },
    reset() {
      this.$refs.field.reset();
    },
  },
  props: {
    label: {
      type: String,
      default: 'Search...',
    },
    change: {
      type: Function,
    },
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
