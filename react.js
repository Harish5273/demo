
//App.js
import React from "react";
import Greetr from "./Greet"
function App() {
  return (
  <div>
    <Greetr isLo="true"/>
  </div>
  );
}
export default App;

//Greet.js
import React from "react";
function Greet(props){
    const isLo=props.isLo;
    return (
        <div>
            {isLo?<h1>WELCOME BACK!</h1>:<h1>PLEASE LOG</h1>}
        </div>
    );
} 
export default Greet;
