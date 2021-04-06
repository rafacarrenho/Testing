import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [checkbox, setCheckbox] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{ backgroundColor: checkbox ? "grey " : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checkbox}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={checkbox}
        onChange={() => setCheckbox(!checkbox)}
      />
      <label htmlFor="disable-button-checkbox">disable button</label>
    </div>
  );
}

export default App;
