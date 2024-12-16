import { compileAllTemplates } from "../lib/compile-templates";
import fs from "fs/promises";
import path from "path";

async function main() {
  const compiledTemplates = await compileAllTemplates();

  const output = `// This file is auto-generated. Do not edit manually.
export const COMPILED_TEMPLATES = ${JSON.stringify(
    compiledTemplates,
    null,
    2
  )} as const;

export type TemplateId = keyof typeof COMPILED_TEMPLATES;`;

  await fs.writeFile(
    path.join(process.cwd(), "lib/compiled-templates.ts"),
    output
  );
}

main().catch(console.error);
