import Link from "next/link";

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight font-mono">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              key="/"
              href="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 font-bold"
            >
              tulski
            </Link>
            <Link
              key="/blog"
              href="/blog"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              blog
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
