<template>
  <div class="options-dropdown" @click="changeShowOtion">
    <div class="options-list flex-center">
      <div class="ol-top flex-center"><a :href="screenshotURL">置顶</a></div>
      <div class="ol-dow-img flex-center" @click.stop="downPic">下载</div>
      <div class="ol-cancel flex-center" @click.stop="changeShowOtion">取消</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '@/stores/mainStore';

import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

const store = useMainStore();
const changeShowOtion = () => {
  store.changeStatus();
};

const screenshotURL = ref('');

const downPic1 = () => {
  // const targetElement = document.querySelector('#app') as HTMLElement;
  // console.log(targetElement);
  // // 使用html2canvas生成截图，并将结果保存到变量screenshot中
  // const removeElements = document.querySelectorAll('.options-dropdown');
  // removeElements.forEach((removeElement) => {
  //   if (targetElement.contains(removeElement)) {
  //     removeElement.remove(); // 直接移除选定的元素
  //   }
  // });
  // domtoimage.toJpeg(targetElement, { quality: 0.95 }).then(function (dataUrl) {
  //   var link = document.createElement('a');
  //   link.download = 'my-image-name.jpeg';
  //   link.href = dataUrl;
  //   link.click();
  // });
  // domtoimage
  //   .toPng(targetElement)
  //   .then(function (dataUrl) {
  //     console.log(dataUrl);
  //     var img = new Image();
  //     img.src = dataUrl;
  //     screenshotURL.value = dataUrl;
  //     // document.body.appendChild(img);
  //   })
  //   .catch(function (error) {
  //     console.error('oops, something went wrong!', error);
  //   });
};

const downPic = () => {
  // 获取需要截图的元素，这里选择了canvas部分
  const targetElement = document.querySelector('#app') as HTMLElement;
  console.log(targetElement);
  // 使用html2canvas生成截图，并将结果保存到变量screenshot中
  const removeElements = document.querySelectorAll('.options-dropdown');
  removeElements.forEach((removeElement) => {
    if (targetElement.contains(removeElement)) {
      removeElement.remove(); // 直接移除选定的元素
    }
  });
  html2canvas(targetElement, {
    useCORS: true, // 使用跨域资源共享(CORS)
    scrollX: 0, // 截图时x轴滚动条的位置
    scrollY: -window.scrollY, // 截图时y轴滚动条的位置
  }).then((canvas) => {
    // 将截图转为png格式的base64编码，并保存到screenshot变量中
    let screenshot = canvas.toDataURL('image/png');
    console.log(screenshot);
    window.open(screenshot);
    // 将截图转为blob对象，并保存到screenshotBlob变量中
    // let screenshotBlob = canvas.toBlob((blob) => {
    //   screenshotBlob = blob;
    // });
  });
};

const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

window.addEventListener('resize', setVh);
setVh(); // 初始化
</script>

<style scoped lang="less">
.options-dropdown {
  position: absolute; /* 绝对定位 */
  height: calc(var(--vh, 1vh) * 100); /* 使用 calc 解决 100vh 问题 */
  width: 100%;
  max-width: 420px;
  background-color: rgba(40, 40, 40, 0.6); /* 透明灰白色背景 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  z-index: 10; /* 确保在其他元素之上 */

  .options-list {
    z-index: 50;
    position: absolute; /* 绝对定位 */
    bottom: 0;
    border-top-left-radius: 0.2rem; /* 仅左上角圆角 */
    border-top-right-radius: 0.2rem;
    width: 100%;
    flex-direction: column;
    transition: height 0.3s ease; /* 添加高度过渡动画 */
    div {
      width: 100%;
      padding: 0.4rem;
    }
    div:last-child {
      margin-top: 0.1rem;
      padding-bottom: 0.8rem;
    }
  }
}
</style>
