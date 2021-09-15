import React from "react";
import { connect } from "react-redux";

const Value = ({ number }) => (
  <div>
    <h1>{number}</h1>
  </div>
);

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
  };
};

export default connect(mapStateToProps, {})(Value);
