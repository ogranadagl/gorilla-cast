<template>
  <v-text-field
    :label="label"
    @change="changeTerm"
    @keypress="keypress"
    append-icon="mdi-magnify"
    color="white"
    ref="field"
    v-bind="$attrs"
  />
</template>

<script src="./script.js"></script>

<style src="./style.css" scoped></style>
