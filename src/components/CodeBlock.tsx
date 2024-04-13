import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <div className="w-full code-block">
      <SyntaxHighlighter
        language="javascript"
        wrapLines={true}
        wrapLongLines={true}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        customStyle={{
          maxHeight: "calc(100vh - 350px)",
          overflow: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
