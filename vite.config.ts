import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const NAVBAR_MFE_HOST = 'http://localhost:5173';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    federation({
      name: 'pokemon-hexagonal',
      remotes: {
        navbar: `${NAVBAR_MFE_HOST}/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:8080',
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
