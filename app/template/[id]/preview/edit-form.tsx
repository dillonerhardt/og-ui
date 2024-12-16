"use client";

import { useState } from "react";
import { GeistMono } from "geist/font/mono";
import { Pencil } from "lucide-react";
import { Template } from "@/lib/templates";

interface EditFormProps {
  template: Template;
  onUpdate: (newProps: Record<string, string>) => void;
}

export function EditForm({ template, onUpdate }: EditFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [props, setProps] = useState(template.defaults || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(props as Record<string, string>);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="py-2 flex items-center gap-2 rounded-md text-sm hover:text-foreground/80 transition-colors"
      >
        <Pencil className="w-5 h-5" />
        Edit
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-16 right-0 z-10 w-80 p-4 rounded-lg border bg-background shadow-lg"
    >
      <div className="grid gap-4">
        {template.defaultsMetadata &&
          Object.entries(template.defaultsMetadata).map(([key, meta]) => (
            <div key={key} className="grid gap-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={key}
                  className={"text-sm font-medium " + GeistMono.className}
                >
                  {key}
                </label>
                <span className="text-xs text-muted-foreground">
                  {meta.description}
                </span>
              </div>
              {meta.type === "color" ? (
                <div className="flex gap-2">
                  <input
                    type="color"
                    id={key}
                    value={(props as any)[key] || meta.placeholder}
                    onChange={(e) =>
                      setProps((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    className="h-9 w-9 rounded border bg-background"
                  />
                  <input
                    type="text"
                    value={(props as any)[key] || meta.placeholder}
                    onChange={(e) =>
                      setProps((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    className="flex-1 px-3 py-2 text-sm rounded-md border bg-background"
                  />
                </div>
              ) : (
                <input
                  type={meta.type === "url" ? "url" : "text"}
                  id={key}
                  value={(props as any)[key] || ""}
                  placeholder={meta.placeholder}
                  onChange={(e) =>
                    setProps((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  className="px-3 py-2 text-sm rounded-md border bg-background"
                />
              )}
            </div>
          ))}
      </div>
      <div className="flex gap-2 mt-4">
        <button
          type="submit"
          className="flex-1 px-3 py-2 rounded-md bg-foreground text-background text-sm font-medium"
        >
          Update Preview
        </button>
        <button
          type="button"
          onClick={() => {
            setProps(template.defaults || {});
            setIsEditing(false);
          }}
          className="px-3 py-2 rounded-md border text-sm font-medium"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
