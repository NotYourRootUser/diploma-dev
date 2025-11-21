import { useState } from "react";

const FormExerciseUpdated = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new item to the list
    setItems([...items, inputValue]);

    // Clear the input after submitting
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={inputValue}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>

      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default FormExerciseUpdated;
