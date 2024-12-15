import { GeistMono } from "geist/font/mono";
import { Clipboard } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { TEMPLATES } from "@/lib/templates";

export default async function CodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id as string;
  const template = TEMPLATES.find((t) => t.id === id)!;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className={"text-lg font-medium " + GeistMono.className}>Code</h2>
        <button className="py-2 flex items-center gap-2 rounded-md text-sm hover:text-foreground/80 transition-colors">
          <Clipboard className="w-5 h-5" /> Copy
        </button>
      </div>
      <CodeBlock code={template.code || ""} />
    </div>
  );
}
