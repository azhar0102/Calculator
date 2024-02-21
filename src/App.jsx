import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-500 flex items-center h-screen w-full">
      <div className="bg-black rounded-3xl mx-auto h-[500px] w-[330px]">
        <input className="bg-black w-full p-4 mt-5 outline-none" />
        <hr className=" w-full border-button" />
        <div className="grid grid-cols-4 pt-2">
          <button className="bg-button text-red roboto-thin text-3xl m-1 h-[70px] w-[70px] hover:bg-gray-400 duration-300 rounded-full">
            C
          </button>
          <button className="bg-button text-red roboto-thin text-3xl m-1 h-[70px] w-[70px] hover:bg-gray-400 duration-300 rounded-full">
            DEL
          </button>
          <div></div>
          <button className="green_btn">&divide;</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="green_btn">X</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="green_btn">+</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="green_btn">-</button>
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
