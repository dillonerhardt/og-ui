import Image from "next/image";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { Clipboard } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

export default async function TemplatePage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;
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
          {/* Preview Section */}
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

          {/* Code Section */}
          <div className="sticky top-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className={"text-lg font-medium " + GeistMono.className}>
                Code
              </h2>
              <button
                // onClick={() => navigator.clipboard.writeText(template.code)}
                className="py-2 flex items-center gap-2 rounded-md text-sm hover:text-foreground/80 transition-colors"
              >
                <Clipboard /> Copy
              </button>
            </div>
            <CodeBlock code={template.code} />
          </div>
        </div>
      </main>
    </div>
  );
}
