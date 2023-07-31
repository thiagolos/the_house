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
        <div class="artist-name" v-if="artistInfo">Featured Artist 
          <br><br> 
          <span>"{{ artistInfo.name }}"</span> 
          <br><br> 
          Popularity Score: <strong>{{ artistInfo.SpotifyData[0].popularity }}</strong>
        </div>
        <img class="hero-image" v-if="artistInfo" :src="artistInfo.SpotifyData[0].images[0].url" alt="Featured Artist">
      </div>
      <div class="top-tracks-container">
        Top Tracks
        <div class="track-container">
          <img class="track-image" v-if="artistInfo" :src="artistInfo.TopTracks[0].images[2].url"/>
          {{ artistInfo?.TopTracks[0].name }} | Popularity Score: <span>{{ artistInfo?.TopTracks[0].popularity }}</span>
          <audio controls>
            <source src='https://p.scdn.co/mp3-preview/212a6ee65ae82331273e0e29faeb4ceea629a71c?cid=ca95b1053b774436a3a2ad9cb39f540e' type="audio/mpeg">
          </audio>
          <!-- {{ artistInfo?.TopTracks[0].preview_url }} -->
        </div>
        <div class="track-container">
          <img class="track-image" v-if="artistInfo" :src="artistInfo.TopTracks[1].images[2].url"/>
          {{ artistInfo?.TopTracks[1].name }} | Popularity Score: <span>{{ artistInfo?.TopTracks[1].popularity }}</span>
          <audio controls>
            <source src={artistInfo?.TopTracks[1].preview_url} type="audio/mpeg">
          </audio>
        </div>
        <div class="track-container">
          <img class="track-image" v-if="artistInfo" :src="artistInfo.TopTracks[2].images[2].url"/>
          {{ artistInfo?.TopTracks[2].name }} | Popularity Score: <span>{{ artistInfo?.TopTracks[2].popularity }}</span>
          <audio controls>
            <source src={artistInfo?.TopTracks[2].preview_url} type="audio/mpeg">
          </audio>
        </div>
      </div>
    </div>
</template>

<style lang='postcss' scoped>
    .featured-artist-container {
      height: 43vh;
      display: flex;
      justify-content: space-between;
    }

    .track-container {
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-size: 0.5em;
    }

    .track-container span, strong { 
      color: red;
    }
    .top-tracks-container {
      font-family: 'Reenie Beanie', cursive;
      font-weight: bold;
      color: white;
      font-size: 3.5em;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }

    .hero-info-container {
      display: flex;
      justify-content: space-evenly;
      padding-left: 2em;
      width: 45%;     
      font-family: 'Reenie Beanie', cursive;
      font-weight: bold;
      color: white;
    }
    .artist-name {
      font-size: 3.5em;
      text-align: center;
      padding-right: 1em;
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