<script setup lang="ts">
import { RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
</template>

<style lang="less">
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
