import { TEMPLATES } from "./templates";
import * as babel from "@babel/core";
import generate from "@babel/generator";
import prettier from "prettier";
import fs from "fs/promises";
import path from "path";

async function readComponentCode(componentName: string) {
  const filePath = path.join(
    process.cwd(),
    "app/template/components",
    `${componentName}.tsx`
  );

  try {
    const code = await fs.readFile(filePath, "utf-8");
    return code;
  } catch (error) {
    console.error(`Failed to read component ${componentName}:`, error);
    return null;
  }
}

export async function compileTemplateCode(code: string) {
  // Format the code with prettier for consistency
  const formattedCode = await prettier.format(code, {
    parser: "typescript",
    semi: true,
    singleQuote: false,
  });

  // Transform the code while preserving structure
  const result = await babel.transformAsync(formattedCode, {
    presets: [
      [
        "@babel/preset-typescript",
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    filename: "virtual.tsx",
    plugins: [
      // Custom plugin to extract the component code
      function extractComponent() {
        return {
          visitor: {
            ExportDefaultDeclaration(path: any) {
              // Keep the entire component declaration
              const componentCode = generate(path.node).code;
              path.addComment("leading", ` Component: ${componentCode} `);
            },
            ExportNamedDeclaration(path: any) {
              // Handle named exports (like export function ProfileOG)
              const componentCode = generate(path.node).code;
              path.addComment("leading", ` Component: ${componentCode} `);
            },
          },
        };
      },
    ],
    comments: true,
    retainLines: true,
  });

  if (!result?.code) {
    throw new Error("Failed to compile template code");
  }

  return {
    original: formattedCode,
    compiled: result.code,
  };
}

export async function compileAllTemplates() {
  const compiledTemplates: Record<
    string,
    { original: string; compiled: string }
  > = {};

  for (const template of TEMPLATES) {
    // Convert template ID to component filename
    const componentName = template.id;

    const code = await readComponentCode(componentName);

    if (code) {
      compiledTemplates[template.id] = await compileTemplateCode(code);
    } else {
      // Fallback to template.code if component file doesn't exist
      if (template.code) {
        compiledTemplates[template.id] = await compileTemplateCode(
          template.code
        );
      }
    }
  }

  return compiledTemplates;
}
