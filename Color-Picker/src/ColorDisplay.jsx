function ColorDisplay({ color, hex }) {
  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex} to clipboard!`);
  };

  return (
    <div className="color-display" style={{ backgroundColor: color }}>
      <p>{color}</p>
      <p>{hex}</p>
      <button onClick={copyHex}>Copy Hex</button>
    </div>
  );
}

export default ColorDisplay;
