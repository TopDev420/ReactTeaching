import React from "react";

const Control2 = (props) => (
  <div>
    <button onClick={props.onPlus}>+</button>
    <button onClick={props.onSubtract}>-</button>
    <button onClick={props.onSetColor}>setColor</button>
  </div>
);

export default Control2;
