<script setup lang="ts">
import { useRoute } from 'vue-router'
import apiClient from '@/apiClient'
import { SpotifyAndTracks } from '@/Types'
import { ref } from 'vue'
import SpotifyData from '@/components/SpotifyData.vue'
import HeaderBar from '@/components/HeaderBar.vue'

const route = useRoute()

const artist = ref<SpotifyAndTracks | null>(null)

const platformChoice = ref<string>('Spotify')

apiClient.getOneArtistDetails(route.params.id.toString()).then((data) => (artist.value = data))
</script>

<template>
  <div class="main-container">
    <HeaderBar />

    <div class="artist-details-container">
      <div class="artist-banner">
        {{ artist?.name }}
        <img class="artist-image" :src="artist?.SpotifyData[0].images[0].url" />
        Popularity Score: <strong>{{ artist?.SpotifyData[0].popularity }}</strong>
      </div>

      <div class="social-data-container">
        <div class="platform-toolbar">
          <a class="btn-wrapper" @click="platformChoice = 'Spotify'"
            ><div class="btn">Spotify</div></a
          >
          <a class="btn-wrapper" @click="platformChoice = 'Instagram'"
            ><div class="btn">Instagram</div></a
          >
        </div>

        <div v-if="platformChoice === 'Spotify'">
          <SpotifyData v-if="artist" :artistId="artist.spotify_id" />
        </div>
        <div class="work-in-progress" v-else>We are working to bring you this feature soon...</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.main-container {
  height: 95vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.work-in-progress {
  font-family: 'Reenie Beanie', cursive;
  font-size: 3em;
  color: white;
  display: flex;
  align-items: center;
  height: 50vh;
}

.social-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
}
.platform-toolbar {
  border-bottom: 1px solid white;
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1em;
  padding-top: 0.5em;
  margin-bottom: 1em;
}
.artist-details-container {
  display: flex;
  height: 86vh;
}

.btn {
  color: white;
  background: none;
  border: none;
  font-family: 'Reenie Beanie', cursive;
  font-size: 2em;
  border: 1px solid white;
  padding: 5px;
}

.btn-wrapper:hover {
  cursor: pointer;
}
.artist-image {
  height: 400px;
  width: 400px;
  border-radius: 5%;
}

.artist-banner {
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 4em;
  font-family: 'Reenie Beanie', cursive;
  font-weight: bold;
  padding-bottom: 1em;
}

strong {
  color: red;
  font-size: 1.5em;
}
</style>
