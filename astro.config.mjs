import { defineConfig } from 'astro/config';

import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
    site: "https://tonyx94.github.io/",
    base: "inksublimex",
    adapter: node({
        mode: 'standalone'
    })
});
