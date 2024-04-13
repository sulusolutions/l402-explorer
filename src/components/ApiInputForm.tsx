import { isValidUrl, parseHeader } from "@/utils";
import { FormWrapper } from "./FormWrapper";
import useLoading from "@/hooks/useLoading";

type ApiData = {
  apiUrl: string;
  invoice: string;
  macaroon: string;
};

type ApiFormProps = ApiData & {
  // TODO: update type to FormData
  updateFields: (fields: Partial<ApiData>) => void;
  next: () => void;
};

const ApiForm = ({ apiUrl, next, updateFields }: ApiFormProps) => {
  const { isLoading, stopLoading, startLoading } = useLoading();
  const handleSubmit = async () => {
    startLoading();
    if (!isValidUrl(apiUrl)) {
      alert("Please enter a valid url");
      stopLoading()
      return;
    }

    try {
      const response = await fetch(apiUrl);
      const headersData = Object.fromEntries(response.headers.entries());
      const { macaroon, invoice } = parseHeader(
        headersData["www-authenticate"]
      );
      updateFields({ invoice: invoice, macaroon: macaroon });
      console.log({ invoice, macaroon });
      next();
      stopLoading();
    } catch (error) {
      alert(error);
      stopLoading();
    }
  };

  return (
    <FormWrapper title="Test L402 API" isLoading={isLoading}>
      <label>API Url</label>
      <input
        autoFocus
        required
        type="text"
        value={apiUrl}
        onChange={(e) => updateFields({ apiUrl: e.target.value })}
        style={{ border: "solid" }}
      />
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <button onClick={handleSubmit}>Next</button>
      </div>
    </FormWrapper>
  );
};

export default ApiForm;
