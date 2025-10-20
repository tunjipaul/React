import "./StateCard.css";

function StateCard({state, capital, region, population, children}) {
  const regionClass =
    region === "North"
      ? "north"
      : region === "South"
      ? "south"
      : region === "East"
      ? "east"
      : region === "West"
      ? "west"
      : "default";
  return (
    <div className={`stateCard ${regionClass}`}>
      <h3>{state}</h3>
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <p>Populaton: {population}</p>
      {children && <p>Landmark: {children}</p>}
    </div>
  );
}

export default StateCard;
