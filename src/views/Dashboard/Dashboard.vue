<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <recentPodcast :track="track" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="5">
        <list-podcast :list="podcasts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./script.js"></script>
