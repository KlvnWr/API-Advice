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
    <div>
      <section className="text-center">
        <div className="bg-DarkGrayishBlue p-10 max-h-30 max-w-prose rounded-lg">
          <h1 className="text-NeonGreen text-lg pb-6 ">Advice #{props?.id}</h1>
          <p className="text-LightCyan text-4xl pb-6">{props?.advice}</p>
          <div className="flex justify-center">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonRestart />
        </div>
      </section>     
    </div>
  );
}

function App() {
  return <AdviceContainer />;
}

export default App;
