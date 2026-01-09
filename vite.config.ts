import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Cast process to any to avoid TS error about cwd missing if Node types are incomplete
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Expondo a API KEY de forma segura para o código cliente conforme padrão do SDK
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
    }
  };
});