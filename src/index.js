import React from "react";
import ReactDOM from "react-dom";

const fName = "Samuel";
const lName = "Abioye";
const num = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>My lucky number is {num}!</p>
  </div>,
  document.getElementById("root")
);
