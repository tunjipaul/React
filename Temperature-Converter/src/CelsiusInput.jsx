function CelsiusInput({ temperature, onCelsiusChange }) {
  return (
    <div className="celsius-input">
      <fieldset>
        <legend>Celsius</legend>
        <input
          type="number"
          value={temperature}
          onChange={(e) => onCelsiusChange(e.target.value)}
        />
      </fieldset>
    </div>
  );
}

export default CelsiusInput;
