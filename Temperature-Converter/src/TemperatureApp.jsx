import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./TemperatureApp.css";

function TemperatureApp() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (value) => {
    const amount = parseFloat(value) || 0;
    setCelsius(amount);
    setFahrenheit((amount * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (value) => {
    const amount = parseFloat(value) || 0;
    setFahrenheit(amount);
    setCelsius(((amount - 32) * 5) / 9);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <CelsiusInput temperature={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput temperature={fahrenheit} onFahrenheitChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureApp;
