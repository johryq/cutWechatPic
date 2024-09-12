<template>
  <div class="content-container">
    <div class="content">
      <div class="content-img">
        <img class="avatar" src="@/assets/logo.svg" alt="avatar" />
      </div>
      <div class="content-box">
        <div class="cb-name name">Name</div>
        <div class="cb-text">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        <div class="cb-images">
          <!-- 1. 多张方形显示，固定尺寸 2. 单张按比例缩小到一定大小 -->
          <img v-for="index in 9" :key="index" class="show-img-more" src="@/assets/images/twitter 3.jpg" alt="" />
        </div>
        <div class="cb-time time">
          <div class="cbt-left">
            {{ sendTime }}
            <img src="" alt="remove" />
          </div>
          <div class="cbt-right">
            <img src="@/assets/images/icon/comment.svg" alt="more" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { currentTime } from '@/utils/time';
const sendTime = ref(currentTime());
</script>

<style scoped lang="less">
.content-container {
  padding: 0.25rem;
  padding-bottom: 0;
}
.content {
  display: flex;
  flex-direction: row;
}
.content-box {
  display: flex;
  flex-direction: column;
  padding: 0.02rem 0.25rem 0 0.25rem;
  div {
    margin: 0.06rem 0;
  }
  .cb-images {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: space-between; /* 在行内均匀分布 */
    .show-img-more {
      width: 30%; /* 每个图片占据30%的宽度 */
      height: auto; /* 高度自动调整以保持比例 */
      margin-bottom: 10px; /* 图片之间的间距 */
    }
  }
  .cb-time,
  .time {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .cbt-right {
    img {
      width: 0.6rem;
    }
  }
}
</style>
