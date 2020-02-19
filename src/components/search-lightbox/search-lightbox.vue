<template>
  <div>
    <v-text-field
      :disabled="loading"
      :loading="dialog"
      @change="search"
      label="Search"
      placeholder="Search"
      solo
      v-model="term"
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
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
        <v-card-title>
          <span class="headline">Results</span>
        </v-card-title>
        <v-card-text>
          <ul>
            <li
              v-for="result in results"
              :key="result.trackId"
              style="display: flex; padding: 20px;"
            >
              <img
                :src="result.artworkUrl60"
                style="width: 60px; display: block; height: 60px; margin-right: 20px;"
              />
              <div>
                <h1>{{result.artistName}}</h1>
                <span>{{result.primaryGenreName}}</span>
              </div>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./styles.scss"></style>
