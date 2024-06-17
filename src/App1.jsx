import react, { useState } from "react";
import "./components/app1.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container1">
        <div className="heading">
          <h1> Counter</h1>
        </div>
        <div className="value">{count}</div>
        <div className="button">
          <button className="increment" onClick={() => setCount(count + 1)}> Increment</button>
          <button className="decrement" onClick={() => setCount(count - 1)} disabled={count === 0}>
            {" "}
            Decrement{" "}
          </button>
          <button className="reset" onClick={() => setCount(0)} disabled={count === 0}>
            {" "}
            Reset{" "}
          </button>
        </div>
      </div>
    </>
  );
}
