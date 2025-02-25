import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "tulski",
  description: "tulski │ blog",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold font-mono text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
