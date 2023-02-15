import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  let counterStyle = {};
  if (count < 5) {
    counterStyle.color = 'green';
  } else if (count < 10) {
    counterStyle.color = 'blue';
  } else {
    counterStyle.color = 'red';
  }

  return (
    <div>
      <h1 style={counterStyle}>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterApp;
