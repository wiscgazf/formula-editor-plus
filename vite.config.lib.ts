import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: true,
    target: 'modules',
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ['vue'],
      input: ['./src/packages/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'dist/cjs',
        },{
          format: 'umd',
          entryFileNames: '[name].js',
          dir: 'dist/umd',
          name: 'formula-editor-plus'
        },
      ]
    },
    lib: {
      entry: './src/packages/index.ts',
      name: 'formula-editor-plus',
    }
  }
})
