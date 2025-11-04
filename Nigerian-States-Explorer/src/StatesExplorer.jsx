import { useState } from "react";

function StatesExplorer() {
  const statesData = [
    { name: "Lagos", capital: "Ikeja", region: "South West" },
    { name: "Kano", capital: "Kano", region: "North West" },
    { name: "Enugu", capital: "Enugu", region: "South East" },
    { name: "Plateau", capital: "Jos", region: "North Central" },
    { name: "Oyo", capital: "Ibadan", region: "South West" },
    { name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { name: "Kaduna", capital: "Kaduna", region: "North West" },
    { name: "Anambra", capital: "Awka", region: "South East" },
    { name: "Benue", capital: "Makurdi", region: "North Central" },
    { name: "Borno", capital: "Maiduguri", region: "North East" },
  ];

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredStates = statesData.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.capital.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "All" || s.region.includes(region);
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="states-container">
      <h1>🇳🇬 Nigerian States Explorer</h1>

      <input
        type="text"
        placeholder="Search by state or capital..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="buttons">
        {["All", "North", "South", "East", "West"].map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={region === r ? "active" : ""}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="list">
        {filteredStates.length > 0 ? (
          filteredStates.map((s) => (
            <p key={s.name}>
              {s.name} - Capital: {s.capital} ({s.region})
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>

      <p className="count">
        Showing {filteredStates.length} of {statesData.length} states
      </p>
    </div>
  );
}

export default StatesExplorer;
