import React, { useState, useCallback } from "react";
import "./App.css";
import { Button1 } from "./Button1";
import { Button2 } from "./Button2";
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  const increment2 = useCallback(() => {
    setCount2((c) => c + 1);
  }, [setCount2]);

  return (
    <div>
      <Button1 increment={increment} />
      <div>count: {count}</div>
      <Button2 increment2={increment2}></Button2>
      <div>count: {count2}</div>
    </div>
  );
};

export default App;
