import Link from "next/link";
import { ThemeToggle } from "app/components/theme-toggle";

export function Navbar() {
  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="space-x-0 pr-10">
            <Link
              key="/"
              href="/"
              className="flex align-middle relative text-2xl font-bold font-mono"
            >
              tulski
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}
