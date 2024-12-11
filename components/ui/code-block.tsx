import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export async function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const options = {
    theme: "github-dark",
    keepBackground: false,
  };

  const processedCode = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // @ts-expect-error rehype-pretty-code is not typed
    .use(rehypePrettyCode, options)
    .use(rehypeStringify)
    .process("```" + language + "\n" + code + "\n```");

  return (
    <div className="relative">
      <div
        className="text-sm p-4 rounded-lg bg-[#111111] border border-white/5 overflow-x-auto "
        dangerouslySetInnerHTML={{ __html: processedCode.toString() }}
      />
    </div>
  );
}
