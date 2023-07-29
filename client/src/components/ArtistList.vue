<script setup lang='ts'>
  import { ref } from 'vue';
  import { NameAndImageType } from '@/Types';
  import apiClient  from '../apiClient'
  import ArtistCard from './ArtistCard.vue';

  const namesAndImages = ref<NameAndImageType[]>([]);

  apiClient.getArtistImagesAndNames().then((data)=> namesAndImages.value = data);

</script>

<template>
  <div class="artist-list-container">
    <div class="list-title">
      Ones To Watch
    </div>
    <div class="artist-list">
      <ArtistCard v-for="listItem of namesAndImages" :listItem="listItem"/>
    </div>
  </div>  
</template>

<style lang='postcss' scoped>
    .artist-list-container {
      height: 45vh;
    }

    .artist-list {
      display: flex;
      gap: 1em;
      width: 100%;
      overflow: scroll;
    }
    .artist-list::-webkit-scrollbar {
      display: none;
    }
</style>