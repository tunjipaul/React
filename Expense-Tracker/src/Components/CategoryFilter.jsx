import { CATEGORIES } from "./Utils";
function CategoryFilter({ currentFilter, onFilterChange }) {
  const filters = ["All", ...CATEGORIES];

  return (
    <div className="card">
      <div className="filter-controls">
        {filters.map((filter) => {
          const isActive = filter.toLowerCase() === currentFilter.toLowerCase();
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter.toLowerCase())}
              className={`filter-btn ${isActive ? "active" : ""}`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
