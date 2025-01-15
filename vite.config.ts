import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());

  return {
    base: '/kep-component',
    // alias config
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/color.less";`,
        },
      },
    },
    // plugins
    plugins: [react()],
    // 서버 포트번호 변경
    server: {
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://192.168.1.28:8080/',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
