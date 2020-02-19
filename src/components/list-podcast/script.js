export default {
  name: 'ListPodcast',
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    getSubTitle(artistName, genreName) {
      return `${artistName} -  ${genreName}`;
    },
  },
  props: {
    podcasts: {
      type: Array,
      default: () => [],
    },
  },
};
