import { getDraftsHandles } from "../../lib/blog-posts";

export async function generateStaticParams() {
  return getDraftsHandles();
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Article({ params }: Props) {
  const slug = (await params).slug;
  const { default: Article } = await import(
    `app/markdown/draft/${slug}.mdx`
  );
  return (
    <section>
      <article className="prose dark:prose-invert font-neutral">
        <Article />
      </article>
    </section>
  );
}
