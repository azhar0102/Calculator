import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand == null) return state;
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return { ...state, operation: payload.operation };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: null,
          operation: payload.operation,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand === 1) return { ...state, currentOperand: null };

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.previousOperand == null ||
        state.operation == null ||
        state.currentOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
};

const evaluate = ({ previousOperand, operation, currentOperand }) => {
  let prev = parseFloat(previousOperand);
  let curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
    case "x":
      computation = prev * curr;
      break;
  }
  return computation.toString();
};

function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="bg-gray-500 flex items-center h-screen w-full">
      <div className="bg-black rounded-3xl mx-auto h-[530px] w-[330px]">
        <div className="flex flex-col items-end justify-around break-words break-all p-2 mt-5">
          <div className="text-slate-400 text-2xl roboto-thin p-4">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="text-white text-3xl roboto-thin p-4">
            {formatOperand(currentOperand)}
          </div>
        </div>
        <hr className=" w-full border-button" />
        <div className="grid grid-cols-4 pt-2">
          <button
            className="red_btn"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            C
          </button>
          <button
            className="red_btn"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          >
            DEL
          </button>
          <div></div>

          <OperationButton operation="÷" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="x" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <div></div>
          <button
            className="green_btn"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
