<template>
  <div class="commint-container">
    <div class="cm-like">
      <div class="cml-top">
        <img class="svg-icon" src="@/assets/images/icon/like.svg" alt="like" />
      </div>
      <div class="cml-bottom">
        <img v-for="index in 15" :key="index" class="sm-avater" src="@/assets/images/Earth Day 2024.png" alt="sm-avatar" />
      </div>
    </div>
    <div class="cm-cmlist" @click="showComment">
      <div class="cm-avatar">
        <img class="svg-icon" src="@/assets/images/icon/commentlist.svg" alt="comment" />
      </div>
      <div class="cm-list">
        <div class="cml-avatar">
          <img class="avater" src="@/assets/logo.svg" alt="avatar" />
        </div>
        <div class="cml-right">
          <div class="cmlr-top">
            <div class="cmlr-name name">啊啊啊去</div>
            <div class="cmlr-time time">
              {{ commitTime }}
            </div>
          </div>
          <div class="cmlr-bottome">
            {{ 'content' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { currentTime } from '@/utils/time';
const showComment = function () {};
const commitTime = ref(currentTime());
</script>

<style scoped lang="less">
.commint-container {
  margin: 0.1rem 0.25rem 0.25rem 0.25rem;
  border-radius: 0.2rem;
}
.cm-like {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  padding-top: 0.2rem;
  .cml-top {
    padding: 0.2rem;
    padding-top: 0.3rem;
    // .svg-icon {
    //   width: 0.35rem;
    //   height: auto;
    // }
  }
  .cml-bottom {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: flex-start; /* 在行内均匀分布 */
    img {
      width: 12%; /* 每个图片占据宽度 */
      height: auto; /* 高度自动调整以保持比例 */
      margin-right: 3px; /* 图片之间的间距 */
      border-radius: 0.2rem;
      // background-color: blueviolet;
      margin-bottom: 3px; /* 图片之间的间距 */
    }
  }
}
.svg-icon {
  width: 0.35rem;
  height: auto;
}
.cm-cmlist {
  display: flex;
  align-items: center;
  padding: 0.1rem;
  img {
    width: 0.6rem;
  }
  .cm-avatar {
    margin: 0 0.1rem 0.1rem 0.1rem;
    .svg-icon {
      width: 0.35rem;
    }
  }
  .cm-list {
    display: flex;
    flex: 1;
    align-items: center;
    .cml-avatar {
      margin: 0.15rem;
      img {
        width: 0.98rem;
        border-radius: 0.15rem;
      }
    }
    .cml-right {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 0.1rem;
      height: 100%;
      .time {
        font-size: 12px;
      }
      .cmlr-top {
        display: flex;
        border-bottom: 0.1rem;
        justify-content: space-between;
      }
      .cmlr-bottom {
      }
    }
  }
}
</style>
