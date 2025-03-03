import Link from "next/link";
import { getPosts } from "app/lib/posts";

export async function Posts() {
  const allPosts = await getPosts();
  const posts = allPosts
    .filter((p) => p.published && p.publishedAt)
    .sort((a, b) => (a.publishedAt.isAfter(b.publishedAt) ? -1 : 1));
  const post = posts[0];
  return (
    <>
      <h2 className="my-2 text-2xl font-bold">Posts</h2>

      <div>
        {posts.map((post) => (
          <a
            href={`/${post.catalogue}/${post.slug}`}
            className="block px-3 pt-4 pb-6 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900"
          >
            <div className="flex items-center gap-2 text-base text-neutral-500 dark:text-neutral-500">
              <p>{post.publishedAt.format("DD.MM.YYYY")}</p>
              <span>/{post.catalogue}</span>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="font-normal text-neutral-600 dark:text-neutral-400">
              {post.description}
              <span className="font-mono">{" ->"}</span>
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
