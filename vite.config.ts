import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Note: In a real project, you would install this package
// import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Uncomment this in a real project after installing the package
    // imagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   pngquant: {
    //     quality: [0.7, 0.8],
    //     speed: 4,
    //   },
    //   webp: {
    //     quality: 75,
    //   },
    // }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src',
      '@images': '/public/images',
    },
  },
  build: {
    // Optimize build for production
    target: 'es2015', // Compatible with more browsers
    minify: 'terser', // Better minification
    cssMinify: true, // Minify CSS
    assetsInlineLimit: 4096, // Inline small assets
    chunkSizeWarningLimit: 500, // Smaller chunks
    rollupOptions: {
      output: {
        // Optimize chunk size
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'react-intersection-observer'],
          ui: ['lucide-react'],
        },
      },
    },
    // Split chunks for better caching
    sourcemap: false, // Disable sourcemaps in production for better performance
  },
  // Optimize server for development
  server: {
    hmr: {
      // Optimize HMR for better performance
      overlay: false, // Disable the HMR overlay for better performance
    },
  },
});