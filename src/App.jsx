import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";

function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

const App2 = () => {
  const data = [
    {
      name: "Ahmed Elsherif",
    },
    {
      name: "Mahmoud Mostafa",
    },
    {
      name: "Mohamed Negm",
    },
  ];
  //const [count, setCount] = useState(0);
  let count = 0;
  const handleIncrement = () => {
    count + 1;
    console.log(count);
    //setCount(count + 1);
  };
  //const data = [];

  return (
    <div>
      {data.map((person, index) => (
        <h1 key={index} className="text-3xl font-bold underline">
          {person.name}
        </h1>
      ))}
      {data.length == 0 ? <div>There no customers create customer</div> : null}
      {data.length == 0 && <div>There no customers create customer</div>}
      <div>{count}</div>
      <button
        type="button"
        className={
          "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        }
        onClick={handleIncrement}
      >
        Increment
      </button>
      <Button label="Decrement" variant="outline"></Button>
    </div>
  );
};

export default App2;
