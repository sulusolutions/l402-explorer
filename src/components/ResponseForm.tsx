import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";

type ResponseData = {
  response: string;
};

type ResponseFormProps = ResponseData & {
  back: () => void;
};

function ResponseForm({ response, back }: ResponseFormProps) {
  return (
    <FormWrapper title="Response">
      <label>Response</label>
      <CodeBlock code={response} />
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
        }}
      >
      </div>
    </FormWrapper>
  );
}

export default ResponseForm;
