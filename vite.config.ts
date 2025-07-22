import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
        proxy: {
          '/api': {
            target: 'https://fe-test.zojapay.com/api',
            changeOrigin: true,
            secure: false, // ← allows self-signed/invalid certificates
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
})

