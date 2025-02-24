import { getBlogPost, getBlogPosts } from "../../lib/blog-posts";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";

export async function generateStaticParams() {
  return getBlogPosts();
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      // url: `${baseUrl}/blog/${post.metadata.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function Blog({ params }: Props) {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);
  const { default: Post } = await import(`app/markdown/${post.slug}.mdx`);
  const openGraph = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${baseUrl}${post.image}`
      : `/og?title=${encodeURIComponent(post.title)}`,
    url: `${baseUrl}/blog/${post.slug}`,
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
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.publishedAt}
        </p>
      </div>
      <article className="prose font-mono">
        <Post />
      </article>
    </section>
  );
}
