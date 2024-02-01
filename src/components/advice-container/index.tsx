import { useEffect, useState } from "react";
import { apiClient } from "../../services/api-client";

interface Advice {
  id: number;
  advice: string;
}

export function AdviceContainer() {
  const [advice, setAdvice] = useState<Advice>();
  useEffect(() => {
    apiClient.get("/advice").then((resp: any) => {
      setAdvice(resp.data.slip);
      console.log(resp.data.slip);
    });
  }, []);
  return (
    <h1>
      Advice {advice?.id} {advice?.advice}
    </h1>
  );
}
