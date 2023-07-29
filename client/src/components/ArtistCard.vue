<script setup lang='ts'>

  const props = defineProps({
    listItem: Object
  })

</script>

<template>
    <div class="artist-card-container">
      <img v-if="listItem" :src="listItem.image" alt="">
    </div>
</template>

<style lang='postcss' scoped>
    
</style>