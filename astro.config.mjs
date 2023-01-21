import { defineConfig } from "astro/config";
import astroI18Next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18Next()],
});
