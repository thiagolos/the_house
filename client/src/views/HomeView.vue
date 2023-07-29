<script setup lang='ts'>
  import Header from '@/components/Header.vue';
  import FeaturedArtist from '@/components/FeaturedArtist.vue';
  import ArtistList from '@/components/ArtistList.vue';
</script>

<template>
  <div class="main-container">
    <Header />
    <FeaturedArtist />
    <ArtistList />
  </div>
</template>

<style lang='postcss' scoped>
  .main-container{
    height: 95vh;
    width: 95vw;
  }
</style>