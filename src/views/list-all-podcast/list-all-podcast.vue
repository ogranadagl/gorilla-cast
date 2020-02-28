<template>
  <div>
    <h1 class="title">Podcasts</h1>
    <list-podcast
      :footer="false"
      :list="podcastListFiltered"
      @search-track="filterPodcasts"
      listWidth="90%"
      noContentLabel="Favorite list is empty"
      title=""
    />
  </div>
</template>

<script src="./list-all-podcast.js"></script>
<style lang="scss" src="./list-all-podcast.scss" scoped></style>
