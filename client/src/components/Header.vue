<script setup lang='ts'>
  
</script>

<template>
  <div class="header-container">
    <router-link style="text-decoration: none;" to="/">
      <div class="logo">
        THE HOUSE uk
      </div>
    </router-link>
  </div>
</template>

<style lang='postcss' scoped>
  .header-container {
    height: 6vh;
    border-bottom: 1px solid white;
    margin-bottom: 2em;
  }

  .logo {
    width: 5.5em;
    padding-left: 15px;
    border: 1px solid red;
    color: red;
    font-size: 2.5em;
    font-weight: bold;
    font-family: 'Reenie Beanie', cursive;
  }

</style>