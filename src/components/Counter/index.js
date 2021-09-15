import { connect } from "react-redux";

import Value from "./Value";
import Control from "./Control";

const Count = ({ color }) => {
  const style = {
    background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    height: 100,
  };
  return (
    <div style={style}>
      <Value />
      <Control />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    color: state.bc.color,
  };
};

export default connect(mapStateToProps, {})(Count);
