import React, { useState } from "react";
import { Provider } from "../../context/MultiStepFormContext";
import Details from "./StepTwo";
import Address from "./StepOne";

const renderStep = (step: number) => {
  switch (step) {
    case 0:
      return <Address />;
    case 1:
      return <Details />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <Provider value={{ next, prev }}>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};

export default MultiStepForm;
