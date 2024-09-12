import type { IUser, IURL } from './../../types/pageData.d';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', () => {
  const pageStatus = ref({
    isShowDropDown: false,
  });
  const pageMainData = ref([
    {
      mainName: '张三',
      mainAvatar: '',
      mainPic: [<IURL>{}],
      mainText: '',
    },
  ]);
  const pageCommitListData = [<IUser>{}];

  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  const changeStatus = () => {
    pageStatus.value.isShowDropDown = !pageStatus.value.isShowDropDown;
  };

  return { pageStatus, pageMainData, pageCommitListData, changeStatus };
});
