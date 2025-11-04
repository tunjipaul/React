function FahrenheitInput({ temperature, onFahrenheitChange }) {
  return (
    <div className="fahrenheit-input">
      <fieldset>
        <legend>Fahrenheit</legend>
        <input
          type="number"
          value={temperature}
          onChange={(e) => onFahrenheitChange(e.target.value)}
        />
      </fieldset>
    </div>
  );
}

export default FahrenheitInput;
