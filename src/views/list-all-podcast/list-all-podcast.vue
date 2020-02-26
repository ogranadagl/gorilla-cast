<template>
  <div class="list">
    <h1>List All Podcasts</h1>
    <list-podcast
      :detailPath="detailPath"
      :footer="false"
      :list="podcastListFiltered"
      @search-track="filterPodcasts"
      listWidth="90%"
    />
  </div>
</template>

<script src="./list-all-podcast.js"></script>

<style src="./list-all-podcast.scss" lang="scss" scoped></style>
