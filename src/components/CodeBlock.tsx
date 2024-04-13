import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FileCopyOutlined } from "@mui/icons-material";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full">
      <SyntaxHighlighter
        language="javascript"
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
      {/* <CopyToClipboard text={code} onCopy={handleCopy}>
        <button
          className="absolute top-2 right-2 z-10 bg-none border-none text-blue-500 cursor-pointer"
          aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? 'Copied!' : <FileCopyOutlined />}
        </button>
      </CopyToClipboard> */}
    </div>
  );
};

export default CodeBlock;
