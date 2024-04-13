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
