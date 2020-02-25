<template>
  <div class="list">
    <h1>List All Podcasts</h1>
    <list-podcast :list="podcasts" @search-track="filterPodcasts" :footer="false" listWidth="90%" />
  </div>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" scoped></style>
