import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://zawazawa5809.github.io/",
  base: "/astro_tutorial/",
  integrations: [tailwind()],
});
