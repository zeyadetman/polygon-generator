import React, { useState } from "react";
import "./App.css";
import Polygon from "./components/Polygon";
import sha256 from "sha256";
import { getChildsCount, getColors, getSidesCount } from "./utils";
import { saveSvgAsPng } from "save-svg-as-png";

const LENGTH = 160;
function App() {
  const [text, setText] = useState("");
  const inputAsHash = sha256(text);
  const colors = getColors(inputAsHash, text);
  const childsCount = getChildsCount(inputAsHash);
  const sidesCount = getSidesCount(inputAsHash);

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Write text and get your own polygon..."
          style={{
            marginBottom: "6rem",
            fontSize: "1em",
            width: "40%",
            color: "#111",
            border: "none",
            outline: "none",
          }}
        />
        <Polygon
          childs={childsCount}
          sides={sidesCount}
          length={LENGTH}
          colors={colors}
        />

        <button
          onClick={() => {
            saveSvgAsPng(
              document.getElementById("polygonResult"),
              `polygon-${text}.png`,
              {
                scale: 1,
                left: LENGTH * -1,
                top: LENGTH * -1,
              }
            );
          }}
          style={{
            backgroundColor: "#eee",
            border: "none",
            marginTop: "2rem",
            cursor: "pointer",
          }}
        >
          Save the polygon
        </button>
      </header>
    </div>
  );
}

export default App;
