import { copyToClipboard } from "@/utils";
import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";
import { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type ResponseFormProps = {
  response: string;
};

const falseResponse = {
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },{
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "42",
      attributes: {
        name: "John",
        age: 80,
        gender: "male",
      },
    },
  ],
};

function ResponseForm({ response }: ResponseFormProps) {
  const [responseCopied, setResponseCopied] = useState(false);
  return (
    <FormWrapper title="Response">
      <div className="py-5">
        <div className="flex justify-between">
          <label className="block text-md font-medium mb-2">API Response</label>
          <button
            className="ml-2 bg-transparent border-none cursor-pointer"
            onClick={() =>
              copyToClipboard(JSON.stringify(falseResponse), setResponseCopied)
            }
          >
            {responseCopied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
          </button>
        </div>
        <CodeBlock code={JSON.stringify(falseResponse)} />
      </div>
    </FormWrapper>
  );
}

export default ResponseForm;
