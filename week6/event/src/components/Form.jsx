import { useState, useEffect } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submit!");
  };

  // handle input change
  const handleChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
