<template>
  <v-text-field
    :label="label"
    @change="change"
    append-icon="mdi-magnify"
    color="white"
    hide-details
    ref="field"
    v-bind="$attrs"
  />
</template>

<script src="./search-input.js"></script>
