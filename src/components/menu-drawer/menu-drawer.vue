<template>
  <v-navigation-drawer v-model="drawer" app clipped :mini-variant.sync="mini"
      permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/image.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Gorilla Cast</v-list-item-title>
        <v-btn
          icon
          @click.stop="mini = !mini" >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
    <v-list dense>
      <v-list-item v-for="link in links" :key="link.link" :to="link.link">
        <v-list-item-action>
          <v-icon>mdi-{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./script.js"></script>
