<template>
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <div @click="handleSetFavorite" v-on="on">
        <v-icon v-if="favorite" color="yellow">mdi-star</v-icon>
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
    trackId: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    favorite: null,
  }),

  created() {
    this.favorite = this.isFavorite;
  },

  computed: {
    tooltipText() {
      return this.favorite ? 'Starred' : 'Not starred';
    },
  },

  methods: {
    handleSetFavorite() {
      this.favorite = !this.favorite;
      this.$emit('on-set-favorite', {
        trackId: this.trackId,
        isFavorite: this.favorite,
      });
    },
  },
};
</script>
