<template>
  <v-text-field
    ref="field"
    :label="label"
    append-icon="mdi-magnify"
    color="white"
    hide-details
    v-bind="$attrs"
    @change="change"
  />
</template>

<script src="./search-input.js"></script>
