import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  build: {
    inlineStylesheets: 'always', 
  },
  integrations: [
    icon({
      include: {
        devicon: ['*'], 
      }
    }),
  ],
  vite: {
    plugins: [],
  },
});