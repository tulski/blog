import { readdir } from "fs/promises";
import { extname, join } from "path";

async function getMDXFileNames(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  return files.filter((file) => extname(file) === ".mdx").map((file) => file);
}

async function getMdxFileFrontmatter(
  markdownFile: string,
): Promise<Record<any, any>> {
  return (await import("app/markdown/" + markdownFile)).frontmatter;
}

export interface BlogPost {
  title: string;
  publishedAt: string;
  slug: string;
  summary: string;
  image?: string;
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fileName = slug + ".mdx";
  const frontMatter = await getMdxFileFrontmatter(fileName);
  return {
    slug,
    ...frontMatter,
  } as BlogPost;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const dir = join(process.cwd(), "app", "markdown");
  const fileNames = await getMDXFileNames(dir);
  const slugs = fileNames.map((f) => f.replace(/\.mdx$/, ""));
  return Promise.all(slugs.map((slugs) => getBlogPost(slugs)));
}
