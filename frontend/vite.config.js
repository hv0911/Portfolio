import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Set to the correct base path based on your deployment environment
  server: {
    port: 3000, // Adjust the port if needed
    host: '0.0.0.0', // This allows access from external devices
  },
  build: {
    outDir: 'dist', // Specify the output directory
  },
  optimizeDeps: {
    include: ['@mui/material'], // Include any dependencies that need to be optimized
  },
  rollupOptions: {
    input: 'src/main.js', // Specify your entry point file
  },
})
