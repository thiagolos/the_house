<script setup lang='ts'>
  import { ref } from 'vue';
  import { SpotifyAndTracks } from '@/Types';
  import apiClient from '../apiClient'

  const artistInfo = ref<SpotifyAndTracks | null>(null);

  apiClient.getOneArtistDetails().then((data: SpotifyAndTracks) => artistInfo.value = data);

</script>

<template>
    <div class="featured-artist-container">
      <div class="hero-info-container">
        <div class="artist-name" v-if="artistInfo">Featured Artist <br><br> <span>"{{ artistInfo.name }}"</span> </div>
        <img class="hero-image" v-if="artistInfo" :src="artistInfo.SpotifyData[0].images[0].url" alt="Featured Artist">
      </div>
    </div>
</template>

<style lang='postcss' scoped>
    .featured-artist-container {
      height: 43vh;
    }

    .hero-info-container {
      display: flex;
      justify-content: space-between;
      padding-left: 2em;
      width: 45%;
    }
    .artist-name {
      font-size: 4em;
      text-align: center;
      font-family: 'Reenie Beanie', cursive;
      font-weight: bold;
      color: white;
    }

    .artist-name span {
      font-size: 1.5em;
    }

    .artist-name em {
      font-size: 0.8em;
    }

    .hero-image {
      height: 400px;
      border-radius: 50%;
    }
</style>