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
      stopLoading();
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
      <div>
        <div className="py-5">
          <label className="block text-md font-medium mb-2">API URL</label>
          <input
            className="flex h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1A1A1A]"
            placeholder="Enter an L402 API URL"
            type="text"
            value={apiUrl}
            onChange={(e) => updateFields({ apiUrl: e.target.value })}
          />
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ApiForm;
