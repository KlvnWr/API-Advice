import { useEffect, useState } from "react";
import "./App.scss";
import { apiClient } from "./services/api-client";
import { Props } from "./components/advice-container";
import import('tailwindcss').Config

function AdviceContainer() {
  const [props, setProps] = useState<Props>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiClient
      .get("/advice")
      .then((resp: any) => {
        setProps(resp.data.slip);
        console.log(resp.data.slip);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Advice #{props?.id}</h1>
      <p>{props?.advice}</p>
    </div>
  );
}

function App() {
  return <AdviceContainer />;
}

export default App;
