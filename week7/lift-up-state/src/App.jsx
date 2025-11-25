import InputComponent from './components/InputComponent'
import ShowInput from './components/ShowInput'
import { useState, useEffect } from 'react'

function App() {
  const [val, setVal] = useState("");

  function handleChangeInApp(e) {
    setVal(e.target.value);
  }

  useEffect(() => {
    console.log(val);
  }, [val]);

 return (
  <div className="wrapper">
    <InputComponent value={val} handleChange={handleChangeInApp} />
    <ShowInput userInput={val} />
  </div>
);

}

export default App;
