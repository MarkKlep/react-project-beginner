import './App.css';

import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const handleMinusCounter = ()=> {
    setCounter(counter - 1);
  }

  const handlePlusCounter = ()=> {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h2>Counter:</h2>
      <h1>{counter}</h1>
      <button onClick={handleMinusCounter} className="minus">- Minus</button>
      <button onClick={handlePlusCounter} className="plus">Plus +</button>
    </div>
  );
}

export default App;
