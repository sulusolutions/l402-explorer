import { isValidUrl, parseHeader } from "@/utils";
import { FormWrapper } from "./FormWrapper";

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
  const handleSubmit = async () => {
    if (!isValidUrl(apiUrl)) {
      alert("Please enter a valid url");
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
    } catch (error) {
      alert(error);
    }
  };

  return (
    <FormWrapper title="Test L402 API">
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
