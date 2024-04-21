import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://zawazawa5809.github.io",
  // base: "/Astro_tutorial",
  base: "https://github.com/zawazawa5809/Astro_tutorial",
  integrations: [tailwind()],
});
