import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works when uploaded to any subdomain / subfolder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
