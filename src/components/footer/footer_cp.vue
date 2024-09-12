<template>
  <div class="footer">
    <div class="footer-top">
      <div class="fc-left">
        <input type="text" placeholder="评论" />
      </div>
      <div class="fc-right">
        <img class="svg-icon" src="@/assets/images/icon/emoticon.svg" alt="" />
      </div>
    </div>
    <div class="footer-bottom"></div>
  </div>
</template>

<script setup lang="ts"></script>
// &:focus { // background-color: rgba(255, 255, 255, 0.2); /* 聚焦时变亮 */ // }
<style scoped lang="less">
.footer {
  width: 100%;
  text-align: center;
  padding: 0.1rem 0 0.8rem 0;
  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .fc-left {
      flex: 1;
      width: 100%;
      input {
        width: 93%;
        border: none; /* 去除边框 */
        outline: none; /* 去除聚焦时的轮廓 */
        padding: 5px; /* 添加内边距 */
        transition: background-color 0.3s; /* 添加过渡效果 */
      }
    }
    .fc-right {
      .svg-icon {
        width: 0.6rem;
      }
    }
  }
  .footer-bottom {
    margin-top: 0.5rem;
    position: fixed; /* 添加此行以固定位置 */
    /*bottom: 0.1rem; /* 向上移动 0.2rem */
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 使其真正居中 */
    width: 30%;
    height: 0.1rem;
    border-radius: 0.05rem;
    z-index: 100; /* 确保在其他元素之上 */
  }
}
</style>
