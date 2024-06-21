import { useEffect, useState } from "react";

export const usePayment = () => {
  const [ amountInCents , setAmountInCents ] = useState();
  const [ reference     , setReference     ] = useState();
  const [ integrity     , setIntegrity     ] = useState();
  const [ currency      , setCurrency      ] = useState();
  
  const hashIntegritySHA256 = async () => {
      if(!amountInCents | !reference | !currency) return;
      const concatString  =
      reference           +
      amountInCents       +
      currency            +
      import.meta.env.VITE_WOMPI_PRIVATE_INTEGRITY_KEY || "";
      const encondedText  = new TextEncoder().encode( concatString );
      const hashBuffer    = await crypto.subtle.digest("SHA-256", encondedText);
      const hashArray     = Array.from(new Uint8Array( hashBuffer ));
      const hashHex       = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
      return hashHex;
    };

  const generateUniqueReference = () => {
      if (crypto && crypto.randomUUID) return crypto.randomUUID();
      else {
        const randomString = Math.random().toString(36).substring(2, 10);
        const timestamp = new Date().getTime().toString(36).substring(2, 12);
        return randomString + timestamp;
  }};
    
  useEffect(() => {
    setReference( generateUniqueReference() );
    setAmountInCents(490000);
  }, []);

  useEffect(() => {
    hashIntegritySHA256().then( hash => setIntegrity( hash ))
  }, [reference, currency, amountInCents]);

  return {
    amountInCents,
    reference,
    integrity,
    currency,
    setAmountInCents,
    setCurrency,
  };
};
