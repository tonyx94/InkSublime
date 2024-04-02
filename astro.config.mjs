import { defineConfig } from 'astro/config';

import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
    site: "https://tonyx94.github.io/",
    adapter: node({
        mode: 'standalone'
    })
});
