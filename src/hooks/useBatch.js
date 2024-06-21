import { useEffect, useState } from "react";
import { getBatchsService } from "../services/get-batchs.service";

export const useBatch = () => {
    
  const setBatchsFunction = async () => {
    const batchs = await getBatchsService();
    setBatchs(batchs);
  };

  const [batchs, setBatchs] = useState(null);

  useEffect(() => {
    setBatchsFunction();
  }, []);

  return {
    batchs,
    setBatchs,
  };
};
