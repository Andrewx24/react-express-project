import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configure proxy to forward requests to backend
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // Optionally remove /api prefix when forwarding to backend
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});