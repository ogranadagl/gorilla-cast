<template>
  <v-app id="root-app" class="app">
    <menu-drawer />
    <app-bar />
    <v-content class="content">
      <router-view />
    </v-content>
    <v-footer app>
      <app-player />
    </v-footer>
  </v-app>
</template>

<script src="./main-layout.js"></script>
<style lang="scss" src="./main-layout.scss"></style>
