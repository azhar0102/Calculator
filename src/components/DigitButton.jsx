import { ACTIONS } from "../App";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className="btn"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
