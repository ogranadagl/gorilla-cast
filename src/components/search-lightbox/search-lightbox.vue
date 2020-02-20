<template>
  <div>
    <search-input
      :change="searchTracks"
      :disabled="loading"
      :loading="dialog"
      ref="search-input"
      solo
    />
    <v-dialog
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="dialog"
      width="600px"
    >
      <v-card>
        <v-card-actions>
          <v-spacer />
          <v-btn
            @click="dialog = false"
            color="green darken-1"
            text
          >
            Close
          </v-btn>
        </v-card-actions>
        <v-card-title>
          <span class="headline">Results</span>
        </v-card-title>
        <v-card-text>
          <list-podcast :list="results" :toolbar="false"/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./styles.scss"></style>
