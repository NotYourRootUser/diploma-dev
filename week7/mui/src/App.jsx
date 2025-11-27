import "./App.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    console.log("button was pressed!");
  }

  function handleChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <Button href="https://www.google.com" variant="outlined" size="large">
        Google
      </Button>

      <Button onClick={handleClick}>Click me!</Button>

      <Checkbox checked={isChecked} onChange={handleChange} />

      {isChecked && <p>The checkbox is checked!</p>}
    </>
  );
}

export default App;
