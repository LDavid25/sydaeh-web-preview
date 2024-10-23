import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias para simplificar importaciones
    },
  },
  build: {
    rollupOptions: {
      external: [], // Asegúrate de que el módulo no esté marcado como externo
    },
  },
});
