import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ViteEnv from 'vite-plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'build', // Make sure this matches the directory you are deploying to
  },
});
