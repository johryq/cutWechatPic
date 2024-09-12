<script setup lang="ts">
import DropdownOptionCP from '@/components/dropdownOption/dropdown_option_cp.vue';
import IosHeaderDetails from '@/components/header/ios_header_ details.vue';
import ContentCp from '@/components/content/content_cp.vue';
import ThemeCp from '@/components/theme_cp.vue';
import CommitListCp from '@/components/commitList/commit_list_cp.vue';
import footerCp from '@/components/footer/footer_cp.vue';
import { useMainStore } from '@/stores/mainStore';
import { storeToRefs } from 'pinia';
const store = useMainStore();
const { pageStatus } = storeToRefs(store);
console.log(pageStatus.value.isShowDropDown);
</script>

<template>
  <canvas class="canvas"></canvas>
  <main :style="{ fontFamily: 'SF-Pro-Display-Thin' }" class="font-bold flex-center">
    <div class="container">
      <IosHeaderDetails />
      <ContentCp />
      <CommitListCp />
      <themeCp />
    </div>
    <footerCp />
  </main>
</template>
<!-- <DropdownOptionCP v-if="pageStatus.isShowDropDown" /> -->

<style lang="less" scoped>
main {
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}
.container {
  flex: 1;
}
.canvas {
  display: none;
}
</style>
