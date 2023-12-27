// https://astro.build/config
import { defineConfig } from "astro/config";
import astroI18Next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import compress from "astro-compress";

export default defineConfig({
  integrations: [astroI18Next(), compress(), tailwind(), mdx()],
});
