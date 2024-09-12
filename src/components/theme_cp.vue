<template>
  <div><button @click="toggleTheme">切换主题</button></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import html2canvas from 'html2canvas';

const isDarkTheme = ref(false);

const toggleTheme = () => {
  // isDarkTheme.value = !isDarkTheme.value;
  // document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light');

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

onMounted(() => {
  // 初始化主题
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkTheme.value = prefersDark;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
});
</script>

<style scoped></style>
