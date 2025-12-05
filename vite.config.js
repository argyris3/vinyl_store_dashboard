import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: ["https://vinyl-store-dashboard.vercel.app", "http://localhost:5173"],
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        '/socket.io': {
          target: ['https://vinyl-store-dashboard.vercel.app', 'http://localhost:5173'],
          ws: true,
          rewriteWsOrigin: true,
        },
      }
    }
  },

  plugins: [react(), tailwindcss()],


})
