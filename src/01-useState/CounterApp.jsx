import { useState } from "react";

const CounterApp = () => {
  const [{ counter1, counterer2, counter3 }, setCounter] = useState({
    counter1: 10,
    counterer2: 20,
    counter3: 30,
  });

  

  return (
    <div>
      <h1>Counter {counter1}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...counter1,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
