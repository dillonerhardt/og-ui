"use client";

import { useState } from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  imageUrl: string;
  templateName: string;
}

export function DownloadButton({
  imageUrl,
  templateName,
}: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${templateName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloading(true);
      setTimeout(() => setDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="py-2 flex items-center gap-2 rounded-md text-sm hover:text-foreground/80 transition-colors"
    >
      <Download className="w-5 h-5" />
      {downloading ? "Downloaded!" : "Download"}
    </button>
  );
}
