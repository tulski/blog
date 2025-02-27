import { readdir } from "fs/promises";
import { extname, join } from "path";

async function getMDXFileNames(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  return files.filter((file) => extname(file) === ".mdx").map((file) => file);
}

export interface ArticleHandle {
  slug: string;
}

export interface ArticleMetadata {
  title: string;
  publishedAt: string;
  time?: string;
  summary: string;
  image?: string;
}

export async function getBlogPostsHandles(): Promise<ArticleHandle[]> {
  const dir = join(process.cwd(), "app", "markdown", "blog");
  const fileNames = await getMDXFileNames(dir);
  const slugs = fileNames.map((f) => f.replace(/\.mdx$/, ""));
  return slugs.map((slug) => ({ slug }));
}

export async function getBlogPosts(): Promise<
  (ArticleHandle & ArticleMetadata)[]
> {
  const slugs = await getBlogPostsHandles();
  return Promise.all(
    slugs.map(async ({slug}) => {
      const { meta } = await import(`/app/markdown/blog/${slug}.mdx`);
      return {
        slug,
        ...meta,
      };
    }),
  );
}

export async function getDraftsHandles(): Promise<ArticleHandle[]> {
  const dir = join(process.cwd(), "app", "markdown", "draft");
  const fileNames = await getMDXFileNames(dir);
  const slugs = fileNames.map((f) => f.replace(/\.mdx$/, ""));
  return slugs.map((slug) => ({ slug }));
}
