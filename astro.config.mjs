import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://zawazawa5809.github.io/",
  base: "/Astro_tutorial",
  integrations: [tailwind(), preact()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});