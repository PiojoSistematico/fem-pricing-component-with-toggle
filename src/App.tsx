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
    <main>
      <header>
        <h1>Our Pricing</h1>
        <div>
          <span>Annually</span>
          <button onClick={handleClick}>SLIDER</button>
          <span>Monthly</span>
        </div>
      </header>
      <section title="main" className="main-section">
        {type.map((elem, index) => (
          <Card key={index} title={elem} properties={data[period]}></Card>
        ))}
      </section>
    </main>
  );
}

export default App;
