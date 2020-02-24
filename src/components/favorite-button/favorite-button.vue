<template>
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <div @click="handleSetFavorite" v-on="on">
        <v-icon v-if="true" color="yellow">mdi-star</v-icon>
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

  data: () => ({
    // favorite: null,
  }),

  created() {
    // this.favorite = this.isFavorite;
  },

  computed: {
    tooltipText() {
      // return this.favorite ? 'Starred' : 'Not starred';
      return 'Starred';
    },
  },

  methods: {
    handleSetFavorite() {
      // this.favorite = !this.favorite;
      /* this.$emit('on-set-favorite', {
        track: this.track,
        isFavorite: this.favorite,
      }); */
      // console.log(`track: ${this.track}`);
      this.$emit('toggle-favorite', this.track);
    },
  },
};
</script>
