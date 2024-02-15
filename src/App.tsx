import { useEffect, useState } from "react";
import "./App.scss";
import { apiClient } from "./services/api-client";
import { Props } from "./components/advice-container";
import { ButtonRestart } from "./components/advice-container/button";
// import import('tailwindcss').Config

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
    <section>
      <div className="bg-DarkGrayishBlue p-10 max-h-30 max-w-prose rounded-lg">
        <h1 className="text-NeonGreen text-lg pb-6">Advice #{props?.id}</h1>
        {/* <p className="text-LightCyan text-4xl">{props?.advice}</p> */}
        <p className="text-LightCyan text-4xl">"It is easy to sit up and take notice, what's difficult is getting up and taking action"</p>
        
      </div>
      <ButtonRestart />
    </section>   
  );
}

function App() {
  return <AdviceContainer />;
}

export default App;
