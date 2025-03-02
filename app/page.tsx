import { BlogPosts } from "app/components/posts";
import { AboutMe } from "app/components/about-me";

export const dynamicParams = false;

export default async function Page() {
  return (
    <>
      <section className="mb-8">
        <AboutMe />
      </section>
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold font-mono">Blog</h2>
        <BlogPosts />
      </section>
    </>
  );
}
