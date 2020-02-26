import { sanitizeText } from '@/utils';

export default {
  name: 'SearchInput',
  methods: {
    change(term) {
      const parsedTerm = sanitizeText(term);
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
    changeEvent: {
      type: String,
      default: 'change',
    },
  },
};
