import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type PaymentData = {
  invoice: string;
  macaroon: string;
};

type PaymentFormProps = PaymentData & {
  next: () => void;
  back: () => void;
};

function PaymentForm({ invoice, macaroon, next, back }: PaymentFormProps) {
  const [invoiceCopied, setInvoiceCopied] = useState(false);
  const [macaroonCopied, setMacaroonCopied] = useState(false);

  const copyToClipboard = async (
    text: string,
    setTracker: (value: boolean) => void
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setTracker(true);
      setTimeout(() => {
        setTracker(false);
      }, 1000);
      console.log("Text copied to clipboard:", text);
    } catch (error) {
      alert("Error copying text to clipboard");
    }
  };

  return (
    <FormWrapper title="Payment Details">
      <div className="py-5">
        <div className="flex justify-between">
          <label className="block text-md font-medium mb-2">Invoice</label>
          <button
            className="ml-2 bg-transparent border-none cursor-pointer"
            onClick={() => copyToClipboard(invoice, setInvoiceCopied)}
          >
            {invoiceCopied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
          </button>
        </div>

        <CodeBlock code={invoice} />
      </div>
      <div className="py-5">
        <div className="flex justify-between">
          <label className="block text-md font-medium mb-2">Macaroon</label>
          <button
            className="ml-2 bg-transparent border-none cursor-pointer"
            onClick={() => copyToClipboard(macaroon, setMacaroonCopied)}
          >
            {macaroonCopied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
          </button>
        </div>
        <CodeBlock code={macaroon} />
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={back}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Back
        </button>
        <button
          onClick={next}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </FormWrapper>
  );
}

export default PaymentForm;
