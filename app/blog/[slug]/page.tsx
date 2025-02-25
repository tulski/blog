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
  const { frontmatter } = await import(`app/markdown/blog/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      type: "article",
      publishedTime: frontmatter.publishedAt,
      url: `${baseUrl}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.summary,
    },
  };
}

export default async function Article({ params }: Props) {
  const slug = (await params).slug;
  const { default: Article, frontmatter } = await import(
    `app/markdown/blog/${slug}.mdx`
  );
  const openGraph = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.publishedAt,
    description: frontmatter.summary,
    image: frontmatter.image
      ? `${baseUrl}${frontmatter.image}`
      : `/og?title=${encodeURIComponent(frontmatter.title)}`,
    url: `${baseUrl}/blog/${frontmatter.slug}`,
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
      <h1 className="title font-semibold font-mono text-2xl tracking-tighter">
        {frontmatter.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
          {frontmatter.publishedAt}
        </p>
      </div>
      <article className="prose font-neutral">
        <Article />
      </article>
    </section>
  );
}
