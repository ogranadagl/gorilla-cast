import MainLayout from '@/components/main-layout/main-layout.vue';

export default {
  components: {
    MainLayout,
  },
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
