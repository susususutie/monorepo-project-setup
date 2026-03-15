import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@foundation': path.resolve(__dirname, '../../packages/foundation/src'),
      '@business-core': path.resolve(__dirname, '../../packages/business-core/src'),
      '@assets': path.resolve(__dirname, '../../packages/assets/src'),
      '@app-iam': path.resolve(__dirname, './src'),
    },
  },
});
