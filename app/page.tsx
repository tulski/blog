import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">tulski</h1>
      <p className="mb-4">
        I am a passionate and determined software developer with a teenage
        curiosity that sparked my programming journey. Programming is more than
        just scripting lines of code for me; it's a deep-rooted enthusiasm that
        encompasses software architecture, security, and the business aspects of
        technology.
      </p>
      <p className="mb-4">
        As a strong advocate of Software Craftsmanship, I constantly strive to
        raise the bar for professional software development. Collaboration and
        knowledge sharing are key elements in my approach, as I believe in the
        power of teamwork. I embrace new challenges with enthusiasm and
        continuously work on developing my skills.
      </p>
      <p className="mb-4">
        I am always eager to learn from others and share my expertise, valuing
        the importance of a collaborative environment. With a thirst for
        knowledge and a constant desire to grow, I am open to new challenges and
        opportunities to expand my abilities. I bring determination, an open
        mind, and a drive to learn and grow.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
