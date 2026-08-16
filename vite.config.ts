import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from /orbis-expeditions/ rather than root.
  base: command === 'build' ? '/orbis-expeditions/' : '/',
  plugins: [react()],
}))
