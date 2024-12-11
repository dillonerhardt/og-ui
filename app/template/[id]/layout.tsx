import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { Tabs } from "./tabs";

type Props = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id as string;
  const template = TEMPLATES.find((t) => t.id === id);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return {
    title: template.title,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
      images: [
        {
          url: template.image,
          width: 1200,
          height: 630,
          alt: template.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.title,
      description: template.description,
      images: [template.image],
    },
  };
}

export default async function TemplateLayout({ children, params }: Props) {
  const id = (await params).id as string;
  const template = TEMPLATES.find((t) => t.id === id);

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
          >
            ← Back to templates
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-8 items-start">
          {/* Left Section - Always visible */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[1200/630] relative rounded-xl overflow-hidden border border-white/5">
              <Image
                src={template.image}
                alt={template.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="rounded-lg ml-1">
              <h1 className={"text-xl font-bold mb-2 " + GeistMono.className}>
                {template.title}
              </h1>
              <p className="text-sm opacity-70">{template.description}</p>
            </div>
          </div>

          {/* Right Section - Route Content */}
          <div className="sticky top-8">
            <Tabs />
            <div>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
