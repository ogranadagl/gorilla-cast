<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
      <span>This track Id: {{ trackId }}, is invalid </span>
      <v-btn dark color="white" class="black--text" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-row dense>
      <v-col cols="12">
        <AppDetail :track="track" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./details.js"></script>
