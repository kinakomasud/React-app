import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>カウント{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * 2)}>✖️2</button>
      <button onClick={() => setCount(0)}>カウントリセット</button>
    </div>
  );
}
export default App;
