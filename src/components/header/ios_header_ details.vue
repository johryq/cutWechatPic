<template>
  <div class="ios-header">
    <div class="ios-header-top">
      <div class="ios-header-top-left">
        <div class="ios-header-top-left-time" :class="{ hotspot: isHotspot }">
          {{ currentTime }}
        </div>
      </div>
      <div class="ios-header-top-right">
        <img class="svg-icon" src="@/assets/images/icon/ios_status.svg" alt="ios_status" />
      </div>
    </div>
    <div class="ios-header-top2">
      <div class="ios-header-top2-left">
        <img class="svg-icon" src="@/assets/images/icon/back.svg" alt="back" />
      </div>
      <div class="ios-header-top2-center">详情</div>
      <div class="ios-header-top2-right" @click="changeShowOtion">
        <img class="svg-icon" src="@/assets/images/icon/three_point.svg" alt="three_point" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.ios-header {
  width: 100%;
  height: 100%;
}
.ios-header-top-left-time {
  margin-left: 0.5rem;
}
.ios-header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  .hotspot {
    // background-color: #fefffe;
    display: inline-block;
    padding: 0.05rem 0.22rem;
    background-color: #67cd67; /* 绿色背景 */
    border-radius: 0.3rem; /* 椭圆形状 */
    color: white; /* 文字颜色 */
    font-size: 0.3rem;
    // line-height: 0.5;
  }
  .ios-header-top-right {
    display: flex;
    justify-content: flex-end;
    img {
      width: 1.6rem;
      margin-right: 0.3rem;
    }
  }
}
.ios-header-top2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0 0.15rem 0;
  img {
    width: 0.22rem;
  }
  .ios-header-top2-left {
    margin-left: 0.3rem;
  }
  .ios-header-top2-right {
    img {
      width: 0.6rem;
    }
    margin-right: 0.34rem;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMainStore } from '@/stores/mainStore';
const isHotspot = ref(true);
const store = useMainStore();
const currentTime = ref(formatTime(new Date()));

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const changeShowOtion = () => {
  store.changeStatus();
};

onMounted(() => {
  // updateTime();
});
</script>
