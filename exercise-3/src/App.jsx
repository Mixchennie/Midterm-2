import React, { useState } from "react";

function App() {
   /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function handleAChange(event) {
    setA(event.target.value);
  }

  function handleBChange(event) {
    setB(event.target.value);
  }

  function computeSum() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("A and B shall be numbers!");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={a} onChange={handleAChange} />

      <label>B =</label>
      <input type="text" value={b} onChange={handleBChange} />

      <label>A + B =</label>
      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input
        type="text"
        value={result}
        disabled
        className={isError ? "error" : ""}
      />

      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;