import type { MetadataRoute } from "next";
import { getPosts } from "app/lib/posts";

export const baseUrl = "https://tulski.com";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const blogPosts = (await getPosts()).map((post) => ({
    url: `${baseUrl}/${post.catalogue}/${post.slug}`,
    lastModified: post.publishedAt.toISOString(),
  }));
  return [...routes, ...blogPosts];
}
