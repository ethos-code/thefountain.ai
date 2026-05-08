import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site → ethos-code.github.io/thefountain.ai/
// When the custom domain (thefountain.ai) is wired, switch site to that and remove base.
export default defineConfig({
  site: 'https://ethos-code.github.io',
  base: '/thefountain.ai',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
