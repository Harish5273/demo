//App.js
import React from "react";
import Count from "./Counte"
function App() {
  return (
  <div>
    <Count/>
  </div>
  );
}
export default App;

//counte.js
import React, { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count} here</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
export default Count;
