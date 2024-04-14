import { isValidUrl, parseHeader } from "@/utils";
import { FormWrapper } from "./FormWrapper";
import useLoading from "@/hooks/useLoading";
import { FormData } from "@/types";
import Button from "./Button";
import Input from "./Input";

type ApiData = {
  apiUrl: string;
};

type ApiFormProps = ApiData & {
  updateFields: (fields: Partial<FormData>) => void;
  next: () => void;
};

const ApiForm = ({ apiUrl, next, updateFields }: ApiFormProps) => {
  const { isLoading, stopLoading, startLoading } = useLoading();

  const handleSubmit = async () => {
    startLoading();
    
    if (!isValidUrl(apiUrl)) {
      alert("Please enter a valid url");
      stopLoading();
      return;
    }

    try {
      const response = await fetch(apiUrl);
      const headersData = Object.fromEntries(response.headers.entries());
      if (!headersData["www-authenticate"]) {
        alert("Please enter a valid L402 url");
        stopLoading();
        return;
      }
      const { macaroon, invoice } = parseHeader(
        headersData["www-authenticate"]
      );
      updateFields({ invoice: invoice, macaroon: macaroon });
      next();
      stopLoading();
    } catch (error) {
      alert(error);
      stopLoading();
    }
  };

  return (
    <FormWrapper title="Test L402 API" isLoading={isLoading}>
      <div className="py-5">
        <Input
          label="API URL"
          placeholder="Enter an L402 API URL"
          type="text"
          value={apiUrl}
          onChange={(e) => updateFields({ apiUrl: e.target.value.trim() })}
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button onClick={handleSubmit}>Next</Button>
      </div>
    </FormWrapper>
  );
};

export default ApiForm;
