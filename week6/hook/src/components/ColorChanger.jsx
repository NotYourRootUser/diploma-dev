import { useState } from "react";

function ColourChanger() {
  const [colour, setColour] = useState("red"); // initial background colour

  function changeColour() {
  switch (colour) {
    case "red": setColour("blue"); break;
    case "blue": setColour("green"); break;
    case "green": setColour("orange"); break;
    case "orange": setColour("yellow"); break;
    default: setColour("red");
  }
}


  return (
    <div>
      <h1 style={{ background: colour, padding: "10px" }}>
        This element is going to change colour
      </h1>

      <button onClick={changeColour}>Change colour</button>
    </div>
  );
}

export default ColourChanger;
