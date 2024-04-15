import { copyToClipboard } from "@/utils";
import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";
import { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import useLoading from "@/hooks/useLoading";

type ResponseFormProps = {
  response: string;
};

function ResponseForm({ response }: ResponseFormProps) {
  const [responseCopied, setResponseCopied] = useState(false);
  const { isLoading } = useLoading();

  return (
    <FormWrapper title="Response" isLoading={isLoading}>
      <div className="py-5">
        <div className="flex justify-between">
          <label className="block text-md font-medium mb-2">API Response</label>
          <button
            className="ml-2 bg-transparent border-none cursor-pointer"
            onClick={() => copyToClipboard(response, setResponseCopied)}
          >
            {responseCopied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
          </button>
        </div>
        <CodeBlock code={response} />
      </div>
    </FormWrapper>
  );
}

export default ResponseForm;
