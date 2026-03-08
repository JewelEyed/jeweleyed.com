import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jeweleyed.com",
  integrations: [mdx(), sitemap(), svelte()],

  server: {
    port: 3000,
    host: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
