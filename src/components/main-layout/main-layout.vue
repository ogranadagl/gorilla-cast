<template>
  <v-app id="root-app">
    <menu-drawer />
    <app-bar />
    <v-content>
      <router-view />
    </v-content>
    <v-footer app>
      <app-player />
    </v-footer>
  </v-app>
</template>

<script src="./main-layout.js"></script>
