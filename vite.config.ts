import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/TROLYTINHOCTHCS/',
    port:3000,
    host:'0.0.0.0',
  },
    plugins: [react(), tailwindcss()],
    define:{
    'process.env.API_KEY': JSON.stringify(env,GENINI_API_KEY),
    'Process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
  },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    
    },
  };
});
