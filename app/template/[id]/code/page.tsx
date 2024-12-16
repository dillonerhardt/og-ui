import { GeistMono } from "geist/font/mono";
import { CodeBlock } from "@/components/ui/code-block";
import { TEMPLATES } from "@/lib/templates";
import { COMPILED_TEMPLATES } from "@/lib/compiled-templates";
import { CopyButton } from "./copy-button";

export default async function CodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const template = TEMPLATES.find((t) => t.id === id)!;

  const compiledTemplate = template.id
    ? (COMPILED_TEMPLATES as any)[template.id]
    : null;
  const displayCode = compiledTemplate
    ? compiledTemplate.original
    : template.code;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className={"text-lg font-medium " + GeistMono.className}>Code</h2>
        <CopyButton code={displayCode || ""} />
      </div>
      <CodeBlock code={displayCode || ""} language="tsx" />
    </div>
  );
}
