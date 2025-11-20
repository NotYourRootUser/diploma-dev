import "./App.css";
import { useEffect, useState } from "react";
import Message from './components/Message';
import Color from './components/ColorChanger'
import ColourChanger from "./components/ColorChanger";

function App() {
  const [count, setCount] = useState(0);     
  const [down, setDown] = useState(100);     
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(`Count state variable was updated to ${count}`)
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setDown(down - 1);
  }

  function reset() {
    setCount(0);
    setDown(100);
  }

  function toggleMessage() {
    setIsVisible(!isVisible);
  }
  
  return (
    <>
    <ColourChanger />
      <button onClick={increment}>
        count is {count}
      </button>

      <button onClick={decrement}>
        count is {down}
      </button>
      
      <button onClick={reset}>
        reset
      </button>

      <button onClick={toggleMessage}>
        {isVisible ? "Unmount" : "Mount"}
      </button>

      {isVisible && <Message />}
    </>
  );
}

export default App;
