import { sanitizeText } from '@/utils';

export default {
  name: 'SearchInput',
  methods: {
    changeTerm(term) {
      const parsedTerm = sanitizeText(term);
      if (!parsedTerm) {
        return;
      }
      this.$emit(this.changeEvent, parsedTerm);
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
      default: 'change',
    },
  },
};
