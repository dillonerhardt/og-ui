import { GeistMono } from "geist/font/mono";
import { TEMPLATES } from "@/lib/templates";
import Image from "next/image";

export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id as string;
  const template = TEMPLATES.find((t) => t.id === id)!;

  return (
    <div className="space-y-8">
      <div>
        <h2 className={"text-lg font-medium mb-4 " + GeistMono.className}>
          Live Preview
        </h2>
        <div className="aspect-[1200/630] relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <img
            src={`/api/og?template=${id}`}
            alt={template.title}
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <h2 className={"text-lg font-medium mb-2 " + GeistMono.className}>
          Preview Details
        </h2>
        <p className="text-sm text-foreground/70">{template.description}</p>
        <div className="mt-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900">
          <p className="text-sm font-mono">
            <span className="text-zinc-500">URL: </span>
            {`${
              process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
            }/api/og?template=${id}`}
          </p>
        </div>
      </div>
    </div>
  );
}
