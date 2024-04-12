import MultiStepFormContext from "@/context/MultiStepFormContext";
import React, { useContext } from "react";

const Address = () => {
  const { next } = useContext(MultiStepFormContext);
  
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Address;
