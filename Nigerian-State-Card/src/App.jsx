import StateCard from "./StateCard";
import './App.css'

function App() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <StateCard
        state="Lagos"
        capital="Ikeja"
        region="West"
        population="20 million"
      >
        Lekki Conservation Centre
      </StateCard>
      <StateCard
        state="Kaduna"
        capital="Kaduna"
        region="North"
        population="50 million"
      >
        Lugard Foot Bridge
      </StateCard>
      <StateCard
        state="Enugu"
        capital="Enugu"
        region="East"
        population="6 million"
      >
        Bonny Island
      </StateCard>
      <StateCard
        state="Rivers"
        capital="Port Harcourt"
        region="South"
        population="10 million"
      >
        Nike Lake Resort
      </StateCard>
    </div>
  );
}

export default App;
