import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ExplorerHome = () => {
  const { register, handleSubmit } = useForm();
  const [url, setUrl] = useState<string | null>(null);
  const [preImage, setPreImage] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<string | null>(null);
  const [macaroon, setMacaroon] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const parseHeader = (header: any) => {
    const macaroonRegex = /macaroon="([^"]+)"/;
    const invoiceRegex = /invoice="([^"]+)"/;

    const macaroonMatch = header.match(macaroonRegex);
    const invoiceMatch = header.match(invoiceRegex);

    return {
      macaroon: macaroonMatch ? macaroonMatch[1] : null,
      invoice: invoiceMatch ? invoiceMatch[1] : null,
    };
  };

  const getResponse = async (preImage: string) => {
    try {
      if (url) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `L402 ${macaroon}:${preImage}`,
          },
        });
        const result = await response.json();
        console.log({ result });
        setApiResponse(result);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getInvoice = async (url: string) => {
    try {
      const response = await fetch(url);
      const headersData = Object.fromEntries(response.headers.entries());
      const { macaroon, invoice } = parseHeader(
        headersData["www-authenticate"]
      );
      setInvoice(invoice);
      setMacaroon(macaroon);
      console.log({ invoice, macaroon });
    } catch (error) {
      alert(error);
    }
  };

  const onSubmit1 = (data: any) => {
    console.log("Form 1 submitted with data:", data);
    setUrl(data.input1);
    getInvoice(data.input1);
  };

  const onSubmit2 = (data: any) => {
    console.log("Form 2 submitted with data:", data);
    setPreImage(data.input2);
    getResponse(data.input2);
  };

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit1)}>
        <div>
          <label htmlFor="input1">Input 1:</label>
          <input id="input1" {...register("input1")} />
          <button type="submit">Submit 1</button>
        </div>
      </form>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div>
          <label htmlFor="input2">Input 2:</label>
          <input id="input2" {...register("input2")} />
          <button type="submit">Submit 2</button>
        </div>
      </form>
    </div>
  );
};

export default ExplorerHome;
