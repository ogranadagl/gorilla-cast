<template>
  <v-text-field
    :label="label"
    @change="changeTerm"
    @keypress="keypress"
    append-icon="mdi-magnify"
    color="white"
    hide-details
    ref="field"
    v-bind="$attrs"
  />
</template>

<script src="./script.js"></script>
