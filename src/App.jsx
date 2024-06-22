import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";
import { fetchMockData } from "./api";

function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    setData(null);
    // fetch("https://course-community-6-leader.koyeb.app/questions/").then(
    //   (res) => {
    //     setQuestions([
    //       {
    //         text: "question 1",
    //       },
    //     ]);
    //   }
    // );
    fetchMockData().then((result) => {
      if (!ignore) {
        setData(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);
  return data;
};

const App2 = () => {
  const [count, setCount] = useState(0);
  const data = useData();
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(0);

  const handleIncrement = () => {
    count + 1;
    if (count === 9) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  //const data = [];

  // useEffect(() => {
  //   if (count === 9) {
  //     setCount(0);
  //   }
  // }, [count === 9]);

  if (!data) {
    return <>...loading</>;
  }

  // if (!questions) {
  //   return <>...loading</>;
  // }
  console.log(questions);

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
      {questions.map((question) => (
        <div>{question.text}</div>
      ))}
      <Button label="Increment" onClick={handleIncrement} />
      <Button
        label="Decrement"
        variant="outline"
        className="bg-gray-900"
      ></Button>
      <Button label="1" onClick={() => setPage(0)} />

      <Button label="2" onClick={() => setPage(1)} />

      <Button label="3" onClick={() => setPage(2)} />
      <Switch
        pages={[<div>page 1</div>, <div>page 2</div>, <div> page 3</div>]}
        current={page}
      />
    </div>
  );
};

function Switch({ pages, current }) {
  console.log(pages[current]);
  return pages[current];
}

export default App2;
