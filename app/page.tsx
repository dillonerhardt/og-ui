import Image from "next/image";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ArrowRight, File, GalleryVerticalEnd, Globe } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

const LIMITATIONS = [
  "Maximum dimensions: 1200x630 pixels",
  "File size limit: < 4MB",
  "Supports JSX-based layouts",
  "Runs on Edge runtime",
  "Limited CSS properties supported",
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        {/* Hero Section */}
        <div className="py-16">
          <div className="flex items-center gap-2">
            <GalleryVerticalEnd className="w-10 h-10 -mt-7" />
            <h1
              className={
                "text-5xl font-bold mb-6 word-spacing-tight " +
                GeistMono.className
              }
            >
              OG (Img) UI
            </h1>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl">
            It's like{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Shadcn/UI
            </a>{" "}
            but for the{" "}
            <a
              href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Next.js OpenGraph Image Generation
            </a>{" "}
            API. Copy, paste, and customize for your projects.
          </p>
        </div>

        {/* Limitations Section */}
        {/* <div className="mb-16 p-6 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06]">
          <h2 className={"text-xl font-bold mb-4 " + GeistMono.className}>
            OG Image Limitations
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {LIMITATIONS.map((limitation) => (
              <li key={limitation} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground/40" />
                {limitation}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((card) => (
            <Link
              href={`/template/${card.id}`}
              key={card.id}
              className="group relative flex flex-col overflow-hidden transition-all hover:scale-[1.02]"
            >
              <div className="aspect-[1200/630] relative rounded-xl overflow-hidden border border-white/5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-1 px-3 py-2.5 rounded-lg bg-foreground/[0.03]">
                <div className="flex justify-between items-center">
                  <h3
                    className={
                      "text-md font-medium mb-1 " + GeistMono.className
                    }
                  >
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-sm opacity-70">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Documentation Links */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <File className="w-4 h-4" />
            Next.js OG Docs
          </a>
          <a
            href="https://erh.im"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Globe className="w-4 h-4" />
            Created by <span className="font-bold">ERH Labs</span>
          </a>
        </div>
      </main>
    </div>
  );
}
