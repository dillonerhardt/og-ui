"use client";

import { GeistMono } from "geist/font/mono";
import { TEMPLATES, DISABLE_PREVIEW_EDIT } from "@/lib/templates";
import { DownloadButton } from "./download-button";
import { EditForm } from "./edit-form";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function PreviewPage() {
  const { id } = useParams();
  const template = TEMPLATES.find((t) => t.id === id)!;
  const [customProps, setCustomProps] = useState<Record<string, string>>({});

  const previewUrl = `/api/og?template=${template.id}${
    Object.keys(customProps).length
      ? "&" + new URLSearchParams(customProps).toString()
      : ""
  }`;

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className={"text-lg font-medium " + GeistMono.className}>
            Preview
          </h2>
          <div className="flex gap-4">
            {!DISABLE_PREVIEW_EDIT && template.defaultsMetadata && (
              <EditForm template={template} onUpdate={setCustomProps} />
            )}
            <DownloadButton imageUrl={previewUrl} templateName={template.id} />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full aspect-[1200/630] rounded-lg border border-black/5 dark:border-white/5 bg-background"
        />
      </div>
    </div>
  );
}
