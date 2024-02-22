import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-opera3tion",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {};

function App() {
  const [number, setNumber] = useState("");

  const [] = useReducer(reducer);

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
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="green_btn">&times;</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="green_btn">+</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="green_btn">&ndash;</button>
          <button className="btn">0</button>
          <button className="btn">.</button>
          <div></div>
          <button className="green_btn">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
