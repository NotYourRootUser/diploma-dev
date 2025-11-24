import "./App.css";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Image from "./components/Image";
import ToggleButton from "./components/ToggleButton";


function App() {
  return (
    <>
    <ToggleButton />
    <Image />
    <h1>CSS module & props.children</h1>
      <Button>
        <h3>Hello World!</h3>
      </Button>

      <Button>hey!</Button>
      <Button>you!</Button>

      <Button>
        <Greeting />
      </Button>
    </>
  );
}

export default App;
