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
    .artist-list {
      display: flex;
      gap: 2em;
      width: 100%;
      overflow: scroll;
      height: 33vh;
      align-items: flex-end;
      padding-bottom: 1em;
    }
    .artist-list::-webkit-scrollbar {
      display: none;
    }
    .artist-list-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
    .list-title {
      display: flex;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid white;
      font-family: 'Reenie Beanie', cursive;
      font-size: 3.5em;
      font-weight: bold;
      color: rgb(255, 255, 255);
    }
</style>