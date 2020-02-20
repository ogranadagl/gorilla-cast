import { sanitizeText } from '@/utils';

export default {
  name: 'SearchInput',
  methods: {
    change(term) {
      const parsedTerm = sanitizeText(term);
      if (parsedTerm) {
        this.$emit(this.changeEvent, parsedTerm);
      }
    },
    keypress(event) {
      this.$emit(this.keypressEvent, event.srcElement.value);
    },
  },
  props: {
    label: {
      type: String,
      default: 'Search...',
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
