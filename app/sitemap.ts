import type { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/blog-posts";

export const baseUrl = "https://tulski.com";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const blogPosts = (await getBlogPosts()).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  return [...routes, ...blogPosts];
}
