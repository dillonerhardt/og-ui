"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Image as ImageIcon } from "lucide-react";

export function Tabs() {
  const pathname = usePathname();
  const isPreview = pathname.endsWith("/preview");
  const isCode = pathname.endsWith("/code");
  const baseUrl = pathname.split("/").slice(0, -1).join("/");

  return (
    <div className="mb-6">
      <div className="relative p-1 bg-zinc-100 dark:bg-zinc-900 rounded-full w-fit pr-3">
        {/* Sliding Background */}
        <div
          className="absolute inset-1 w-[calc(50%-4px)] bg-white dark:bg-zinc-800 rounded-full shadow-sm transition-transform duration-200 ease-out"
          style={{
            transform: `translateX(${isCode ? "100%" : "0"})`,
          }}
        />

        {/* Tabs */}
        <div className="relative flex gap-2">
          <Link
            href={`${baseUrl}/preview`}
            className={`flex items-center justify-center gap-2 pl-3 py-2 pr-6 rounded-md text-sm font-medium transition-colors duration-200 relative z-10 ${
              isPreview
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <ImageIcon size={16} className="transition-colors duration-200" />
            Preview
          </Link>
          <Link
            href={`${baseUrl}/code`}
            className={`flex items-center justify-center gap-2 pr-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative z-10 ${
              isCode
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Code size={16} className="transition-colors duration-200" />
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
