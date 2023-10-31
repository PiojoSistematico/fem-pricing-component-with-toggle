import { useEffect, useState } from "react";
import Card from "./components/Card";

type propObj = {
  price: string;
  storage: string;
  users: string;
  sendUpTo: string;
};

type propData = {
  [key: string]: { [key: string]: propObj };
};

function App() {
  const [data, setData] = useState<propData>({});
  const [period, setPeriod] = useState("monthly");

  const type: string[] = ["basic", "professional", "master"];

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  function handleClick(): void {
    period == "monthly" ? setPeriod("annually") : setPeriod("monthly");
  }

  return (
    <>
      <header>
        <h1>Our Pricing</h1>
        <div className="toggle-section">
          <span>Annually</span>
          <button className="toggle" onClick={handleClick}>
            <span
              className={
                period == "monthly"
                  ? "toggle-circle right"
                  : "toggle-circle left"
              }
            ></span>
          </button>
          <span>Monthly</span>
        </div>
      </header>
      <main>
        {type.map((elem, index) => (
          <Card
            key={index}
            index={index}
            title={elem}
            properties={data[period]}
          ></Card>
        ))}
      </main>
    </>
  );
}

export default App;
