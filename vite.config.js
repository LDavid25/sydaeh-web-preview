import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  logLevel: 'debug', // Cambia a 'debug' para más detalles
  build: {
    sourcemap: true, // Habilita sourcemaps para ver mejor los errores
  }
});
