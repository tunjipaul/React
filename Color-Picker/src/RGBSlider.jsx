function RGBSlider({ label, value, onChange }) {
  return (
    <div className="slider-container">
      <label className="slider-label">{label}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
      />
      <div className="slider-value">{value}</div>
    </div>
  );
}

export default RGBSlider;
