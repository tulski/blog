// @ts-check

import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  reactStrictMode: true,
  options: {
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, {name: 'meta'}]]  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
