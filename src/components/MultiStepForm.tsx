import { FormEvent, useState } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import ApiInputForm from "./ApiInputForm";
import PaymentForm from "./PaymentForm";
import PreimageForm from "./PreimageInputForm";
import ResponseForm from "./ResponseForm";

type FormData = {
  apiUrl: string;
  invoice: string;
  macaroon: string;
  preimage: string;
  response: string;
};

const INITIAL_DATA: FormData = {
  apiUrl: "",
  invoice: "",
  macaroon: "",
  preimage: "",
  response: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const gotoNextStep = () => {
    next();
  };

  const gotoPreviousStep = () => {
    back();
  };

  const { steps, currentStepIndex, step, back, next } = useMultistepForm([
    <ApiInputForm
      key="apiInput"
      {...data}
      updateFields={updateFields}
      next={gotoNextStep}
    />,
    <PaymentForm
      key="payment"
      {...data}
      next={gotoNextStep}
      back={gotoPreviousStep}
    />,
    <PreimageForm
      key="preimage"
      {...data}
      updateFields={updateFields}
      next={gotoNextStep}
      back={gotoPreviousStep}
    />,
    <ResponseForm key="response" {...data} back={gotoPreviousStep} />,
  ]);

  return (
    <div className="relative bg-white border border-black rounded-lg p-8 m-4">
      <div className="absolute top-0 right-0 mt-2 mr-2">
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
    </div>
  );
};

export default MultiStepForm;
