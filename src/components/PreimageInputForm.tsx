import useLoading from "@/hooks/useLoading";
import { FormWrapper } from "./FormWrapper";

type PreimageData = {
  preimage: string;
  response: string;
};

type PreimageFormProps = PreimageData & {
  apiUrl: string;
  macaroon: string;
  preimage: string;
  updateFields: (fields: Partial<PreimageData>) => void;
  next: () => void;
  back: () => void;
};

const PreimageForm = ({
  apiUrl,
  macaroon,
  preimage,
  next,
  back,
  updateFields,
}: PreimageFormProps) => {
  const { isLoading, stopLoading, startLoading } = useLoading();
  const handleSubmit = async () => {
    if (!preimage.trim()) {
      alert("Please enter preimage");
      return;
    }
    startLoading();
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `L402 ${macaroon}:${preimage}`,
        },
      });
      if (response.ok) {
        const result = await response.json();
        updateFields({ response: JSON.stringify(result) });
        next();
        stopLoading();
      } else {
        // TODO: Add in constants
        if (response.status === 402) {
          alert(
            "Invalid preimage. Please try again or enter a valid preimage."
          );
        } else {
          alert("Error: " + response.statusText);
        }
        stopLoading();
      }
    } catch (error) {
      alert(error);
      stopLoading();
    }
  };

  return (
    <FormWrapper title="Payment Verification" isLoading={isLoading}>
      <div className="py-5">
        <label className="block text-md font-medium mb-2">Preimage</label>
        <textarea
          className="flex h-24 w-full rounded-md border border-input px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1A1A1A]"
          placeholder="Enter the preimage"
          value={preimage}
          onChange={(e) => updateFields({ preimage: e.target.value.trim() })}
        />
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={back}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </FormWrapper>
  );
};

export default PreimageForm;
