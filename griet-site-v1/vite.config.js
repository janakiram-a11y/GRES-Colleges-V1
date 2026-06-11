import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Disable Vite's built-in output dir clean — the gallery folder has
    // thousands of large image files that make Windows rmSync time out.
    // Run `npm run clean` manually before a fresh build if needed.
    emptyOutDir: false,
  },
})
