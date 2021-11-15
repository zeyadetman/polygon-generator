import React, { useState } from "react";
import "./App.css";
import Polygon from "./components/Polygon";
import sha256 from "sha256";
import { getChildsCount, getColors, getSidesCount } from "./utils";

const LENGTH = 150;
function App() {
  const [text, setText] = useState("");
  const inputAsHash = sha256(text);
  console.log(inputAsHash);
  const colors = getColors(inputAsHash);
  const childsCount = getChildsCount(inputAsHash);
  const sidesCount = getSidesCount(inputAsHash);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <Polygon
          childs={childsCount}
          sides={sidesCount}
          length={LENGTH}
          colors={colors}
        />
      </header>
    </div>
  );
}

export default App;
