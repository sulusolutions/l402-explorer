import MultiStepFormContext from "@/context/MultiStepFormContext";
import React, { useContext } from "react";

const Details = () => {
  const { next, prev } = useContext(MultiStepFormContext);
  
  return (
    <div>
      <h1>Details</h1>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Details;
