<script setup lang="ts">
import FeaturedArtist from '@/components/FeaturedArtist.vue'
import ArtistList from '@/components/ArtistList.vue'
import HeaderBar from '@/components/HeaderBar.vue'
</script>

<template>
  <div class="main-container">
    <HeaderBar />
    <FeaturedArtist />
    <ArtistList />
  </div>
</template>

<style lang="postcss" scoped>
.main-container {
  height: 95vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
