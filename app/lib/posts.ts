import { async as fastGlob } from "fast-glob";
import dayjs, { Dayjs } from "dayjs";
import { Component } from "react";

export interface ArticleHandle {
  catalogue: string;
  slug: string;
}

export interface ArticleMetadata {
  title: string;
  published?: boolean;
  publishedAt: Dayjs;
  description?: string;
}

export async function getPostsHandles(): Promise<ArticleHandle[]> {
  const files = await fastGlob("app/**/*.mdx");
  return files
    .map((path) => path.replace(/\.mdx$/, "").split("/"))
    .map((split) => ({
      catalogue: split.at(-2)!,
      slug: split.at(-1)!,
    }));
}

export async function loadPost({ catalogue, slug }: ArticleHandle) {
  const { meta, default: Post } = await import(
    `/app/posts/${catalogue}/${slug}.mdx`
  );
  return {
    meta: meta as ArticleMetadata,
    Post: Post as Component,
  };
}

export async function getPosts(): Promise<(ArticleHandle & ArticleMetadata)[]> {
  const slugs = await getPostsHandles();
  return Promise.all(
    slugs.map(async (handle) => {
      const { meta } = await loadPost(handle);
      return {
        ...meta,
        ...handle,
        publishedAt: dayjs(meta.publishedAt),
      };
    }),
  );
}
