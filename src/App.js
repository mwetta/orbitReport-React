import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData.js"


function App() {
  const [sat, setSat] = useState(satData); //instantiates sat with state set to satData; state setter function defined as setSat();
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  console.log(displaySats);
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  }

  return (
    <div>
      <Banner />
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
