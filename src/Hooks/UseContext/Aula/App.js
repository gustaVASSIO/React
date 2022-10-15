import React from "react";
import { GLobalStorage } from "./GlobalContext";
import Produto from "./Produto";

function App() {
  return (
    <GLobalStorage>
      <Produto />
    </GLobalStorage>
  );
}

export default App;
