import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/design-system-ignite/', // Asegure-se de que esse caminho está correto
  build: {
    outDir: 'storybook-static', // O diretório correto para saída
  },
})
