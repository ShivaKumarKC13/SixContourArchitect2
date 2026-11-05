import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base path ensures assets resolve correctly on GitHub Pages subpaths
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
