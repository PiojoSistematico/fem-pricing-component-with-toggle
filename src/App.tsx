import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({});
  const [period, setPeriod] = useState("monthly");

  const type: string[] = ["basic", "professional", "master"];

  useEffect(() => {
    console.log("aers");
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  /* console.log(data[period]); */

  function handleClick(): void {
    period == "monthly" ? setPeriod("annually") : setPeriod("monthly");
  }

  return (
    <>
      <header>
        <h1>Our Pricing</h1>
        <div className="toggle-section">
          <span>Annually</span>
          <button onClick={handleClick}>Toggle</button>
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
