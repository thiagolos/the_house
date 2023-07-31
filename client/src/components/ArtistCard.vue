<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    listItem: Object
  });

  const isHovered = ref(false);

</script>

<template>
  <div
    class="artist-card-container"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="image-wrapper">
      <router-link :to="`/artistDetails/${props.listItem?.spotify_id}`">
        <img
          v-if="listItem"
          class="artist-image"
          :src="listItem.image"
          alt="Artist Image"
        >
      </router-link>
    </div>

    <p
      v-if="listItem"
      class="name"
      :style="{ opacity: isHovered ? 1 : 0 }"
    >
      {{ listItem.name }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
  .artist-card-container {
    position: relative;
    height: 280px;
  }

  .image-wrapper {
    filter: blur(0);
    transition: filter 0.5s;
  }

  .artist-card-container:hover .image-wrapper {
    filter: blur(5px);
    cursor: pointer;
  }

  .artist-image {
    height: 280px;
    border-radius: 3%;
  }

  .name {
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    color: rgb(0, 0, 0);
    bottom: 200px;
    opacity: 0;
    transition: opacity 0.5s;
    font-size: 3.5em;
    font-family: 'Reenie Beanie', cursive;
    font-weight: bold;
    text-shadow: -2px -2px 0 white, 0.3px -2px 0 white, -2px 0.3px 0 white, 0.3px 0.3px 0 white;
  }

  .artist-card-container:hover .name {
    opacity: 1;
  }
  
</style>
