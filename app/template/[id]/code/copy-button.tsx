"use client";

import { useState } from "react";
import { Clipboard } from "lucide-react";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="py-2 flex items-center gap-2 rounded-md text-sm hover:text-foreground/80 transition-colors"
    >
      <Clipboard className="w-5 h-5" />
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
