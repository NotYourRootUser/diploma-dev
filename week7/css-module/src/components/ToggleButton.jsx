import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>

      <p>
        {isOn ? "Toggle Button is on!" : "Toggle Button is off!"}
      </p>
    </div>
  );
}

export default ToggleButton;
