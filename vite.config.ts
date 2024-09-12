import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import postcsspxtorem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      less: {
        // @import "normalize.css";
        //                @import "./src/assets/styles/main.css";

        additionalData: `
                @import "./src/assets/styles/theme.less";
                @import "./src/assets/styles/main.css";
        `,
      },
    },
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
