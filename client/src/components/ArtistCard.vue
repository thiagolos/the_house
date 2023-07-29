<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    listItem: Object
  });

  const isHovered = ref(false);

</script>

<template>
  <div class="artist-card-container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

    <div class="image-wrapper">
      <img class="artist-image" v-if="listItem" :src="listItem.image" alt="Artist Image"/>
     </div>

    <p v-if="listItem" class="name" :style="{ opacity: isHovered ? 1 : 0 }">
      {{ listItem.name }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
  .artist-card-container {
    position: relative;
  }

  .image-wrapper {
    /* Apply the blur effect when the container is hovered */
    filter: blur(0);
    transition: filter 0.5s;
  }

  .artist-card-container:hover .image-wrapper {
    filter: blur(5px);
    cursor: pointer;
  }

  .name {
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    color: rgb(0, 0, 0);
    bottom: 250px;
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
