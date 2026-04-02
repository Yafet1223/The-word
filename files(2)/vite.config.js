import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/prayers': 'http://localhost:3000',
      '/users': 'http://localhost:3000',
      '/versus': 'http://localhost:3000',
    }
  }
})
