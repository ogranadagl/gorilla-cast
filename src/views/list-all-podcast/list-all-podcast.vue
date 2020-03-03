<template>
  <div>
    <h1 class="title">Podcasts</h1>
    <list-podcast
      :footer="false"
      :list="podcastListFiltered"
      list-width="90%"
      no-content-label="Favorite list is empty"
      title=""
      @search-track="filterPodcasts"
    />
  </div>
</template>

<script src="./list-all-podcast.js"></script>
<style lang="scss" src="./list-all-podcast.scss" scoped></style>
