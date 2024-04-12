import { createContext } from "react";

const FormContext = createContext({
  next: () => {},
  prev: () => {},
});

export default FormContext;

export const { Provider, Consumer } = FormContext;
