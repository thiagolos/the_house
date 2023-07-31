<script setup lang='ts'>
  import Header from '@/components/Header.vue';
  import { useRoute } from 'vue-router';
  import apiClient from '@/apiClient';
  import { SpotifyAndTracks } from '@/Types';
  import { ref } from 'vue';

  const route = useRoute();

  const artistDetails = ref<SpotifyAndTracks | null>(null);

  apiClient.getOneArtistDetails(route.params.id as string).then((data) => console.log(data));

</script>

<template>
  <div class="main-container">
    <Header />
  </div>
</template>

<style lang='postcss' scoped>
  .main-container{
    height: 95vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>