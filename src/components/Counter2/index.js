import { connect } from "react-redux";

import Value2 from "./Value2";
import Control2 from "./Control2";
import * as actions from "../../actions";

const Count2 = (props) => {
  const setColor = () => {
    let color = [
      Math.floor(Math.random() * 100 + 155),
      Math.floor(Math.random() * 100 + 155),
      Math.floor(Math.random() * 100 + 155),
    ];
    props.handleSetColor(color);
  };

  const style = {
    background: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`,
    height: 100,
  };

  return (
    <div style={style}>
      <Value2 number={props.number} />
      <Control2
        onPlus={props.handleIncrement}
        onSubtract={props.handleDecrement}
        onSetColor={setColor}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.bc.color,
  };
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Count2);
