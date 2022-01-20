import pptv from '@exclison/postcss-px-to-viewport'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test/sub/',
  publicDir: '/test/sub/',
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:6]'
    },
    postcss: {
      plugins: [
        pptv({
          viewportWidth: 375,
          viewportUnit: 'vw',
          minPixelValue: 1
        })
      ]
    }
  },
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['iOS 9']
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist/test/sub',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        h5: resolve(__dirname, 'h5/index.html')
      }
    }
  }
})
