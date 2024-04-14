import { useState } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import ApiInputForm from "./ApiInputForm";
import PaymentForm from "./PaymentForm";
import PreimageForm from "./PreimageInputForm";
import ResponseForm from "./ResponseForm";
import { FormData } from "@/types";

const INITIAL_DATA: FormData = {
  apiUrl: "",
  invoice: "",
  macaroon: "",
  preimage: "",
  response: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

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

  const jumpToLastStep=()=>{
    goToLastStep()
  }

  const { steps, currentStepIndex, step, back, next, goToLastStep } = useMultistepForm([
    <ApiInputForm
      key="apiInput"
      {...data}
      updateFields={updateFields}
      next={gotoNextStep}
      goToLastStep={jumpToLastStep}
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
    <ResponseForm key="response" {...data} />,
  ]);

  return (
    <div className="relative bg-[#161B22] max-w-[600px] rounded-xl p-12 m-4">
      <div className="absolute top-0 right-0 mt-2 mr-2 p-5">
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
    </div>
  );
};

export default MultiStepForm;
