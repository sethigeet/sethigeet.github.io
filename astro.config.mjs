import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://sethigeet.github.io",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkGfm,
      remarkMath,
      [remarkToc, { heading: "contents" }],
    ],
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, {}]],
  },
});
