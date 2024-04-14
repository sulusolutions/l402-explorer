import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prettier from "prettier/standalone";
import babel from "prettier/plugins/babel";
import esTree from "prettier/plugins/estree";
import { isJSONString } from "@/utils";

type CodeBlockProps = {
  code: string;
  startLoading?: () => void;
  stopLoading?: () => void;
};

const CodeBlock = ({
  code,
  startLoading = () => {},
  stopLoading = () => {},
}: CodeBlockProps) => {
  const [formattedCode, setFormattedCode] = useState<string>(code);

  useEffect(() => {
    const getFormattedCode = async () => {
      try {
        const formattedCode = await prettier.format(code, {
          parser: "json",
          plugins: [babel, esTree],
        });
        setFormattedCode(formattedCode);
      } catch (error) {
        alert(error);
      }
    };

    if (isJSONString(code)) {
      getFormattedCode();
    }
  }, [code]);

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
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
