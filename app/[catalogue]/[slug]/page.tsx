import { getPostsHandles, loadPost, ArticleHandle } from "app/lib/posts";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<ArticleHandle[]> {
  return getPostsHandles();
}

interface Props {
  params: Promise<ArticleHandle>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { catalogue, slug } = await params;
  const { meta } = await import(`app/posts/${catalogue}/${slug}.mdx`);
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
  const handle = await params;
  const { Post, meta } = await loadPost(handle);
  const openGraph = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    datePublished: meta.publishedAt,
    dateModified: meta.publishedAt,
    description: meta.description,
    url: `${baseUrl}/${handle.catalogue}/${handle.slug}`,
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
        <Post />
      </article>
    </section>
  );
}
