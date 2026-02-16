import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Output directory
      outDir: 'dist',
      // Generate sourcemaps for production debugging
      sourcemap: isProd ? 'hidden' : true,
      // Minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProd, // Remove console.logs in production
          drop_debugger: isProd,
        },
      },
      // Code splitting configuration
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor chunks
            'react-vendor': ['react', 'react-dom'],
            'analytics-vendor': ['@vercel/analytics', '@vercel/speed-insights'],
            // Component chunks
            components: [
              './components/Navigation',
              './components/WorkCard',
              './components/ContactForm',
              './components/LogoMarquee',
            ],
            // Page chunks
            pages: ['./components/Imprint', './components/Privacy', './components/Consultant'],
          },
          // Asset file naming
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') ?? [];
            let extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
              extType = 'images';
            } else if (/woff|woff2|eot|ttf|otf/i.test(extType ?? '')) {
              extType = 'fonts';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000, // 1MB
      // CSS code splitting
      cssCodeSplit: true,
      // Asset inlining threshold (4KB)
      assetsInlineLimit: 4096,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', '@vercel/analytics', '@vercel/speed-insights'],
    },
    // Performance optimizations
    esbuild: {
      // Remove console and debugger in production
      drop: isProd ? ['console', 'debugger'] : [],
      // Tree-shaking
      treeShaking: true,
    },
  };
});
