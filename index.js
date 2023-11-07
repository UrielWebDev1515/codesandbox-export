import React from "react";
import ReactDOM from "react-dom";

const fname = "Uriel";
const lname = "Enriquez";
const number = "7";

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}{" "}
    </h1>
    <p>Your Lucky Number {number} </p>
  </div>,
  document.getElementById("root")
);
