import { useState } from "react";
import "./ColorPicker.css";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = `rgb(${red}, ${green}, ${blue})`;
  const hex = `#${[red, green, blue]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

  return (
    <div className="color-picker-container">
      <h2>🎨 Color Picker</h2>
      <RGBSlider label="Red" value={red} onChange={setRed} />
      <RGBSlider label="Green" value={green} onChange={setGreen} />
      <RGBSlider label="Blue" value={blue} onChange={setBlue} />
      <ColorDisplay color={color} hex={hex} />
    </div>
  );
}

export default ColorPicker;
