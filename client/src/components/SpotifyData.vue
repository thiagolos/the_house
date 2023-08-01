<script setup lang="ts">
import { ref } from 'vue'
import { Track, SpotifyAndTracks } from '@/Types'
import apiClient from '@/apiClient'
import TrackCard from './TrackCard.vue'
import moment from 'moment'

const props = defineProps({
  artistId: String
})

const trackList = ref<Track[]>([])
const genreList = ref<String[]>([])
const fullDetails = ref<SpotifyAndTracks | null>(null)

const uniqueNames: { [key: string]: boolean } = {}

// Fetches full artist details from database => sets fullDetails state => filters out duplicate tracks => sorts by descending popularity => sets trackList state

apiClient
  .getOneArtistDetails(props.artistId!)
  .then((data) => (fullDetails.value = data))
  .then(
    (data) =>
      (trackList.value = data.TopTracks.filter(
        (track) => !uniqueNames[track.name] && (uniqueNames[track.name] = true)
      ).sort((trackA, trackB) => trackB.popularity - trackA.popularity))
  )

apiClient
  .getOneArtistDetails(props.artistId!)
  .then((data) => (genreList.value = data.SpotifyData[0].genres))
</script>

<template>
  <div class="spotify-data-container">
    <div class="track-list">
      <span>Top Tracks</span>
      <TrackCard v-for="(track, index) of trackList" :key="index" :track="track" />
    </div>
    <div class="social-metrics">
      <span>Genres</span>
      <div v-if="genreList!.length" class="genre-list-container">
        <div class="genre-list" v-for="(genre, index) of genreList" :key="index">
          <li>{{ genre.toLowerCase() }}</li>
        </div>
      </div>
      <template v-else>
        <div class="genre-list-default">Artist has no listed genres</div>
      </template>
      <span>Spotify Followers</span>
      <div class="spotify-followers">
        <strong>{{ fullDetails?.SpotifyData[0].followers }}</strong>
      </div>
      <div class="data-update">
        <div>Data Updated On</div>
        <strong>{{ moment(fullDetails?.createdAt).format('dddd Mo MMMM YYYY') }}</strong>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.spotify-data-container {
  width: 65vw;
  display: flex;
  font-family: 'Reenie Beanie', cursive;
  color: white;
}

strong {
  color: red;
}

.genre-list-container {
  border-bottom: 1px dashed white;
  margin-bottom: 0.5em;
}

.genre-list-default {
  margin-bottom: 1em;
}

.spotify-followers {
  border-bottom: 1px dashed white;
  padding-bottom: 0.8em;
  margin-bottom: 1em;
  width: 9em;
}

.data-update div {
  padding-bottom: 1em;
}
.social-metrics {
  font-size: 3em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 35vw;
}

.social-metrics span {
  padding-bottom: 0.5em;
  padding-top: 0.5em;
}

.social-metrics li::marker {
  color: red;
}
.track-list {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  height: 78vh;
  overflow: scroll;
  text-align: center;
  padding-top: 1em;
}

li {
  padding-bottom: 0.5em;
}

.track-list span {
  font-size: 3em;
  font-weight: bold;

  padding-bottom: 10px;
}
.track-list::-webkit-scrollbar {
  display: none;
}
</style>
