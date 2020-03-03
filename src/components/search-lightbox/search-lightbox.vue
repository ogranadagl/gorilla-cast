<template>
  <div>
    <search-input
      ref="searchInput"
      :disabled="loading"
      :loading="dialog"
      solo
      @change="searchTracks"
    />
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      width="600px"
    >
      <v-card>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
        <v-card-title>
          <span class="headline">Results</span>
        </v-card-title>
        <v-card-text>
          <list-podcast :list="results" :toolbar="false" :footer="false" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./styles.scss"></style>
