import { resolve } from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          [require.resolve('babel-plugin-module-resolver'), {
            root: ["./dist/"],
            alias: {
              viewover: "./viewover-bundle.min.js"
            }
          }]
        ]
      }
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/js/Viewover.js'),
      name: 'viewover',
      // the proper extensions will be added
      fileName: 'viewover-bundle.min'
    },
  },
})