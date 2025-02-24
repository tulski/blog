import { BlogPosts } from "app/components/posts";

export const dynamicParams = false;

export default async function Page() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-xl font-semibold">tulski</h1>
        <h2 className="mb-8 text-neutral-600 dark:text-neutral-400 tracking-tighter">
          home grown dev
        </h2>
        <p className="mb-4 font-mono">
          I am a passionate and determined software developer with a teenage
          curiosity that sparked my programming journey. Programming is more
          than just scripting lines of code for me; it's a deep-rooted
          enthusiasm that encompasses software architecture, security, and the
          business aspects of technology.
        </p>
        <p className="mb-4 font-mono">
          As a strong advocate of Software Craftsmanship, I constantly strive to
          raise the bar for professional software development. Collaboration and
          knowledge sharing are key elements in my approach, as I believe in the
          power of teamwork.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">Blog</h2>
        <BlogPosts />
      </section>
    </>
  );
}
