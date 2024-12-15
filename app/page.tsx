import Image from "next/image";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import {
  ArrowRight,
  File,
  GalleryVerticalEnd,
  Globe,
  Sparkles,
} from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

const showPreviews = true;

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
                "text-3xl md:text-4xl mb-6 font-bold word-spacing-tight " +
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

          {/* New Callout Section */}
          <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg max-w-3xl">
            <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Not using Next.js? No worries! You can still use these templates
              with{" "}
              <a
                href="https://github.com/vercel/satori"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Satori
              </a>{" "}
              (by Vercel). Check out this{" "}
              <a
                href="https://kettanaito.com/blog/build-time-og-images-in-remix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                great guide
              </a>{" "}
              on implementing dynamic OG images in Remix! ✨
            </p>
          </div>
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
                {showPreviews ? (
                  <img
                    src={`/api/og?template=${card.id}`}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="md:mt-1 px-1 py-1 rounded-lg bg-foreground/[0.03]">
                <div className="flex justify-between items-center">
                  <h3 className={"text-md font-medium " + GeistMono.className}>
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 group-hover:text-blue-500" />
                </div>
                <p className="text-sm opacity-70">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Documentation Links */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://github.com/dillonerhardt/og-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              className="dark:invert"
              width={16}
              height={16}
            />
            GitHub
          </a>
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
