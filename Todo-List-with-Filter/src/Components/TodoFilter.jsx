function TodoFilter({ filter, onFilterChange }) {
  const filters = ["all", "uncompleted", "completed"];

  return (
    <div style={{ margin: "10px 0" }} className="todoFilter">
      <span>Filter: </span>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            margin: 4,
            fontWeight: filter === f ? "bold" : "normal",
          }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
