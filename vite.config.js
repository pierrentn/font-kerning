import { defineConfig } from 'vite'

// vite.config.js
export default defineConfig(({command, mode }) => {
  return {
    assetsDir: 'res',
    publicDir: 'public',
    // root: 'src',
    build: {
      emptyOutDir: true,
      outDir: '../dist'
    }
  }
});
