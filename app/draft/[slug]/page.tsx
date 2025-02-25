import { getDraftsHandles } from "../../lib/blog-posts";

export async function generateStaticParams() {
  return getDraftsHandles();
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Article({ params }: Props) {
  const slug = (await params).slug;
  const { default: Article, frontmatter } = await import(
    `app/markdown/draft/${slug}.mdx`
  );
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {frontmatter.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {frontmatter.publishedAt}
        </p>
      </div>
      <article className="prose font-neutral">
        <Article />
      </article>
    </section>
  );
}
