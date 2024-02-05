// import { useEffect, useState } from "react";
// import { apiClient } from "../../services/api-client";

export interface Props {
  id: number;
  advice: string;
}

// export function AdviceContainer() {
//   const [advice, setAdvice] = useState<Advice>();
//   useEffect(() => {
//     apiClient.get("/advice").then((resp: any) => {
//       setAdvice(resp.data.slip);
//       console.log(resp.data.slip);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>Advice #{advice?.id}</h1>
//       <p>{advice?.advice}</p>
//     </div>
//   );
// }
