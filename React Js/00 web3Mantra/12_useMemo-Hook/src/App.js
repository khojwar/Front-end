import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  const expensiveCalculation = (num) => {
    console.log("Calculating");
    for (let i = 0; i < 1000000000; i++) {}
    return num
  }

  const Calculation = useMemo(() => 
    expensiveCalculation(count)
  ,[count])



  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count} </h1>

      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name} </h1>
    </div>
  );
}

export default App;
