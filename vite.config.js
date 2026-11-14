import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { open: '/todo-app.html' },
  build: { rollupOptions: { input: 'todo-app.html' } },
})
