import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
console.log(window.origin);

export default defineConfig({
  // base:'portfolio',
  plugins: [vue()],
})
