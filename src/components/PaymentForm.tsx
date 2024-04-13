import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";

type PaymentData = {
  invoice: string;
  macaroon: string;
};

type PaymentFormProps = PaymentData & {
  next: () => void;
  back: () => void;
};

function PaymentForm({ invoice, macaroon, next, back }: PaymentFormProps) {
  return (
    <FormWrapper title="Payment Details">
      <label>Invoice</label>
      <CodeBlock code={invoice} />
      <label>Macaroon</label>
      <CodeBlock code={macaroon} />

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",
        }}
      >
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </div>
    </FormWrapper>
  );
}

export default PaymentForm;
