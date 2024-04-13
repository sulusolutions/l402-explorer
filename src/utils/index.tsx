export const parseHeader = (header: any) => {
  const macaroonRegex = /macaroon="([^"]+)"/;
  const invoiceRegex = /invoice="([^"]+)"/;

  const macaroonMatch = header?.match(macaroonRegex);
  const invoiceMatch = header?.match(invoiceRegex);

  return {
    macaroon: macaroonMatch ? macaroonMatch[1] : null,
    invoice: invoiceMatch ? invoiceMatch[1] : null,
  };
};

export const isValidUrl = (url: string): boolean => {
  const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return !!pattern.test(url);
};

export const copyToClipboard = async (
  text: string,
  setTracker: (value: boolean) => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    setTracker(true);
    setTimeout(() => {
      setTracker(false);
    }, 1000);
  } catch (error) {
    alert("Error copying text to clipboard");
  }
};

export const isJSONString = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};