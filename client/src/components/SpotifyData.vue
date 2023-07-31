<script setup lang='ts'>
  import { ref } from 'vue';
  import { Track, SpotifyAndTracks } from '@/Types';
  import apiClient from '@/apiClient';
  import TrackCard from './TrackCard.vue';

  const props = defineProps({
    artistId: String
  })
  const trackList = ref<Track[]>([]);

  const uniqueNames: { [key: string]: boolean } = {};

  apiClient.getOneArtistDetails(props.artistId!).then((data) => trackList.value = data.TopTracks.filter((track) => !uniqueNames[track.name] && (uniqueNames[track.name] = true)));

</script>

<template>
  <div class="spotify-data-container">
    <div class="track-list">
      <TrackCard v-for="track of trackList" :track="track" />
    </div>
  </div>
  <div class="social-metrics">

  </div>
</template>

<style lang='postcss' scoped>
    .spotify-data-container {
      display: flex;
      width: 65vw;
    }

    .track-list {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      height: 80vh;
      overflow: scroll;
      padding-top: 3em;
    }

    .track-list::-webkit-scrollbar {
      display: none;
    }
</style>