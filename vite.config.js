import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Dubai-mall-presentation-',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
