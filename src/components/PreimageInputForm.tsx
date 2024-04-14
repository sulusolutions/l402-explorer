import useLoading from "@/hooks/useLoading";
import { FormWrapper } from "./FormWrapper";
import { STATUS_CODES } from "@/constants";
import Button from "./Button";
import { FormData } from "@/types";

type PreimageData = {
  preimage: string;
};

type PreimageFormProps = PreimageData & {
  apiUrl: string;
  macaroon: string;
  preimage: string;
  updateFields: (fields: Partial<FormData>) => void;
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
        if (response.status === STATUS_CODES.PAYMENT_REQUIRED) {
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
          className="h-24 w-full rounded-md border border-gray-300 px-3 py-2 text-md text-gray-900 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 placeholder-gray-400"
          placeholder="Enter the preimage"
          value={preimage}
          onChange={(e) => updateFields({ preimage: e.target.value.trim() })}
        />
      </div>
      <div className="flex justify-between mt-2">
        <Button onClick={back}>Back</Button>
        <Button onClick={handleSubmit}>Next</Button>
      </div>
    </FormWrapper>
  );
};

export default PreimageForm;
