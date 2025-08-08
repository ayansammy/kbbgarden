import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // No sub-path needed on Render.com

  plugins: [react()],

  server: {
    // This proxy is only used during development
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },

  build: {
    outDir: 'dist', // Confirmed you're using this
  },
});
