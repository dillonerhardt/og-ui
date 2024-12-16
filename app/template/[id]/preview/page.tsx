import { GeistMono } from "geist/font/mono";
import { TEMPLATES } from "@/lib/templates";
import { DownloadButton } from "./download-button";

export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  const template = TEMPLATES.find((t) => t.id === params.id)!;
  const previewUrl = `/api/og?template=${template.id}`;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className={"text-lg font-medium " + GeistMono.className}>
          Preview
        </h2>
        <DownloadButton imageUrl={previewUrl} templateName={template.id} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt="Preview"
        className="w-full aspect-[1200/630] rounded-lg border border-white/5 bg-background"
      />
    </div>
  );
}
