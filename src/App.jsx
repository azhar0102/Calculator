import { useReducer, useState } from "react";
import DigitButton from "./components/DigitButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
};

function App() {
  const [number, setNumber] = useState("");

  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="bg-gray-500 flex items-center h-screen w-full">
      <div className="bg-black rounded-3xl mx-auto h-[530px] w-[330px]">
        <div className="flex flex-col items-end justify-around break-words break-all p-2 mt-5">
          <div className="text-slate-400 text-2xl roboto-thin">
            {previousOperand} {operation}
          </div>
          <div className="text-white text-3xl roboto-thin">
            {currentOperand}
          </div>
        </div>
        <hr className=" w-full border-button" />
        <div className="grid grid-cols-4 pt-2">
          <button className="red_btn">C</button>
          <button className="red_btn">DEL</button>
          <div></div>

          <button className="green_btn">&divide;</button>
          <DigitButton digit={"1"} dispatch={dispatch} />
          <DigitButton digit={"2"} dispatch={dispatch} />
          <DigitButton digit={"3"} dispatch={dispatch} />
          <button className="green_btn">&times;</button>
          <DigitButton digit={"4"} dispatch={dispatch} />
          <DigitButton digit={"5"} dispatch={dispatch} />
          <DigitButton digit={"6"} dispatch={dispatch} />
          <button className="green_btn">+</button>
          <DigitButton digit={"7"} dispatch={dispatch} />
          <DigitButton digit={"8"} dispatch={dispatch} />
          <DigitButton digit={"9"} dispatch={dispatch} />

          <button className="green_btn">&ndash;</button>
          <DigitButton digit={"0"} dispatch={dispatch} />
          <button className="btn">.</button>
          <div></div>
          <button className="green_btn">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
