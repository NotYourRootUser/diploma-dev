import "./App.css";
import ArrowFunction from "./components/ArrowFunction";
import Form from "./components/Form";
import FormExercise from "./components/FormExercise";


function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>;
      <ArrowFunction />
      <Form />
      <h2>From Exercise</h2>
      <FormExercise />
    </>
  );
}

export default App;
