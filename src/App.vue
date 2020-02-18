<template>
  <main-layout></main-layout>
</template>

<script>
import MainLayout from '@/layouts/main-layout.vue';

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
</script>
