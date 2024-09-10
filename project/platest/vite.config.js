mport { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: true, // ローカルネットワーク上で公開
    port: 8008  // 必要に応じてポートも設定
  }
});
