import type { Metadata } from "next";
import { Fira_Code, Roboto } from "next/font/google";
import "./global.css";
import "app/highlight";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import * as console from "console";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "tulski",
    template: "%s | tulski",
  },
  description: "tulski │ home grown dev",
  openGraph: {
    title: "tulski",
    description: "tulski │ home grown dev",
    url: baseUrl,
    siteName: "tulski",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const firaCode = Fira_Code({
  subsets: ["cyrillic"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-black"
      suppressHydrationWarning
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider attribute="class">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
