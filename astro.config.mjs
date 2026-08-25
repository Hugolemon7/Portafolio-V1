import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Tailwind v4 ya no usa la integración @astrojs/tailwind (deprecada):
// se conecta como plugin de Vite directamente.
export default defineConfig({
  site: 'https://hugobuenrostro.com', // TODO: cambiar por el dominio real
  vite: {
    plugins: [tailwindcss()],
  },
});