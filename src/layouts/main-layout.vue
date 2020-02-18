<template>
  <v-app id="root-app">
    <menu-drawer></menu-drawer>
    <app-bar></app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <app-player></app-player>
    </v-footer>
  </v-app>
</template>

<script>
import MenuDrawer from '@/components/menu-drawer/menu-drawer.vue';
import AppBar from '@/components/app-bar/app-bar.vue';
import AppPlayer from '@/components/app-player/app-player.vue';

export default {
  name: 'MainLayout',
  components: {
    MenuDrawer,
    AppBar,
    AppPlayer,
  },
};
</script>
