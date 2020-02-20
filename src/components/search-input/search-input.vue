<template>
  <v-text-field
    :label="label"
    color="white"
    append-icon="mdi-magnify"
    class="search-input"
    @change="change"
    @keypress="keypress"
  />
</template>

<script src="./script.js"></script>

<style src="./style.css" scoped></style>
