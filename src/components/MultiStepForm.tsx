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
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
    </div>
  );
};

export default MultiStepForm;
