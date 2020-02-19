<template>
  <v-text-field
    label="Search.."
    color="white"
    append-icon="mdi-magnify"
    @change="change"
    @keypress="keypress"
  />
</template>

<script src="./script.js"></script>

<style scoped>
.v-input {
  margin-top: 1.5rem;
}
</style>
