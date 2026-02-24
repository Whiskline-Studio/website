// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://whisklinestudio.com',
      dynamicRoutes: ['/projeto', '/sobre', '/labs', '/projeto/tales-of-bloomrise'],
      exclude: ['/404'],
      trailingSlash: false,
    }),
  ],
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})