import { Posts } from "app/components/posts";
import { AboutMe } from "app/components/about-me";

export const dynamicParams = false;

export default async function Page() {
  return (
    <>
      <section className="mb-8">
        <AboutMe />
      </section>
      <section className="mb-8">
        <Posts />
      </section>
    </>
  );
}
