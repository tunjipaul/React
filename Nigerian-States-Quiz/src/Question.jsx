function Question({ data, selected, onSelect, onSubmit, number }) {
  return (
    <div>
      <h3>Question {number}:</h3>
      <p>{data.question}</p>
      {data.options.map((opt) => (
        <div key={opt}>
          <label>
            <input
              type="radio"
              value={opt}
              checked={selected === opt}
              onChange={(e) => onSelect(e.target.value)}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={onSubmit} disabled={!selected}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
