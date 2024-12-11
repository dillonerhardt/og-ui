import Image from "next/image";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ArrowRight, File, GalleryVerticalEnd, Globe } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        {/* Hero Section */}
        <div className="py-16">
          <div className="flex items-center gap-2">
            <GalleryVerticalEnd className="w-7 h-7 md:w-10 md:h-10 -mt-7" />
            <h1
              className={
                "text-3xl md:text-5xl mb-6 font-bold word-spacing-tight " +
                GeistMono.className
              }
            >
              OG (Img) UI
            </h1>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl">
            It&apos;s like{" "}
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

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TEMPLATES.map((card) => (
            <Link
              href={`/template/${card.id}/code`}
              key={card.id}
              className="group relative flex flex-col overflow-hidden transition-all hover:scale-[1.02]"
            >
              <div className="aspect-[1200/630] relative rounded-xl overflow-hidden border border-black/5 dark:border-white/5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="md:mt-1 px-3 py-2.5 rounded-lg bg-foreground/[0.03]">
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
