// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ← ici on déclare le chemin public
 base: './',

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ← on demande à Vite de compiler dans docs/
  build: {
    outDir: 'docs'
  }
})
