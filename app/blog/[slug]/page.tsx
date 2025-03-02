import { getBlogPostsHandles } from "../../lib/blog-posts";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";

export async function generateStaticParams() {
  return getBlogPostsHandles();
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { meta } = await import(`app/posts/blog/${slug}.mdx`);
  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
      publishedTime: meta.publishedAt,
      url: `${baseUrl}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
    },
  };
}

export default async function Article({ params }: Props) {
  const slug = (await params).slug;
  const imp = await import(
      `app/posts/blog/${slug}.mdx`
      );
  const { default: Article, meta } = await import(
    `app/posts/blog/${slug}.mdx`
  );
  const openGraph = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    datePublished: meta.publishedAt,
    dateModified: meta.publishedAt,
    description: meta.summary,
    image: meta.image
      ? `${baseUrl}${meta.image}`
      : `/og?title=${encodeURIComponent(meta.title)}`,
    url: `${baseUrl}/blog/${meta.slug}`,
    author: {
      "@type": "Person",
      name: "tulski",
    },
  };
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openGraph),
        }}
      />
      <article className="prose dark:prose-invert font-neutral">
        <Article/>
      </article>
    </section>
  );
}
