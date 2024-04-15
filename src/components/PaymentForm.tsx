import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { FormWrapper } from "./FormWrapper";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { copyToClipboard } from "@/utils";
import Button from "./Button";
import QRCode from "react-qr-code";

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

  return (
    <FormWrapper title="Payment Details">
      <div
        className="py-2 flex flex-col items-center"
      >
        <div className="w-full flex justify-between">
          <label className="block text-md font-medium mb-2">Invoice</label>
          <button
            className="ml-2 bg-transparent border-none cursor-pointer"
            onClick={() => copyToClipboard(invoice, setInvoiceCopied)}
          >
            {invoiceCopied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
          </button>
        </div>
        <CodeBlock code={invoice} />
        <div className="m-4 p-4 bg-white inline-block">
          <QRCode value={invoice} size={120} />
        </div>
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
        <Button onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </FormWrapper>
  );
}

export default PaymentForm;
