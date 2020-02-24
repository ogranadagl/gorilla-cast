<template>
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <div @click="handleToggleFavorite" v-on="on">
        <v-icon v-if="track.isFavorited" color="yellow">mdi-star</v-icon>
        <v-icon v-else color="grey lighten-1">mdi-star-outline</v-icon>
      </div>
    </template>
    <span>{{tooltipText}}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'FavoriteButton',

  props: {
    track: {
      type: Object,
      required: true,
    },
  },

  computed: {
    /**
     * Get the text to show over the tooltip.
     * @return {String} Returns 'Starred' or 'Not starred'.
     */
    tooltipText() {
      // return this.favorite ? 'Starred' : 'Not starred';
      return 'Starred';
    },
  },

  methods: {
    /**
     * Handles the click event to set the favorite value.
     */
    handleToggleFavorite() {
      // this.favorite = !this.favorite;
      /* this.$emit('on-set-favorite', {
        track: this.track,
        isFavorite: this.favorite,
      }); */
      this.$emit('toggle-favorite', this.track);
    },
  },
};
</script>
