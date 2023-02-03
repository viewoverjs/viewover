import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `viewover..min.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  plugins: [
    cssInjectedByJsPlugin(),
  ]
})