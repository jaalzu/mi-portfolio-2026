import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon'; // <-- IMPORTA LA LIBRERÍA
export default defineConfig({
  integrations: [react(),icon({
      include: {
        devicon: ['*'], 
      }
    }),],

  vite: {
    plugins: [],
  },
});