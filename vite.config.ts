import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/BevasarloKosar_svelte/',
    build: {
      outDir: 'docs',
      emptyOutDir: true
  }
})
