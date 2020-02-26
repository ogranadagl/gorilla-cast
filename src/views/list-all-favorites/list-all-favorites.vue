<template>
  <div class="list">
    <h1>List All Favorites</h1>
    <list-podcast
      :detailPath="detailPath"
      :list="favorites"
      :footer="false"
      listWidth="90%"
      title="Favorites"
    />
  </div>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" scoped></style>
