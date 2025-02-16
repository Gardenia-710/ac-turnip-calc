import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // NOTE: カスタムドメインで運用しているのでbaseの指定は必要ない
  // base: '/ac-turnip-calc/',
})
