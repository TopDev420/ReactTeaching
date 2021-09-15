import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

const setRandomColor = (props) => {
  const color = [
    Math.floor(Math.random() * 100 + 155),
    Math.floor(Math.random() * 100 + 155),
    Math.floor(Math.random() * 100 + 155),
  ];

  return props.handleSetColor(color);
};

const Control = (props) => (
  <div>
    <button onClick={props.handleIncrement}>+</button>
    <button onClick={props.handleDecrement}>-</button>
    <button onClick={() => setRandomColor(props)}>Randomsize Color</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleSetColor: (color) => {
      dispatch(actions.setColor(color));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Control);
