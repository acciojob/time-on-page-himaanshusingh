import React from "react";
import { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>
        You've been on this page for <strong>{count}</strong> seconds.
      </p>
    </div>
  );
};

export default App;
