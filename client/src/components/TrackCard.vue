<script setup lang="ts">
const props = defineProps({
  track: Object
})
</script>

<template>
  <div class="track-card-container">
    <img class="track-image" :src="props.track?.images[1].url" alt="Track Image" />
    <div class="track-details">
      {{ track?.name }}
      <audio controls v-if="track">
        <source :src="track.preview_url" type="audio/mpeg" />
      </audio>
      <div>
        Popularity Score: <strong>{{ track?.popularity }}</strong>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.track-image {
  height: 150px;
  border-radius: 10px;
}

.track-card-container {
  display: flex;
  color: white;
  font-family: 'Reenie Beanie', cursive;
  font-size: 1.8em;
  width: 30vw;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px dashed white;
}

audio {
  height: 1em;
}

strong {
  color: red;
  font-size: 1.5em;
}

.track-details {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 0.5em;
}
</style>
