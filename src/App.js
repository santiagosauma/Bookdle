import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App"><nav>
      <h1>Bookdle</h1>
    </nav>
    <AppContext.Provider value={{board, setBoard}}>
      <Board />
      <Keyboard />
    </AppContext.Provider>
    </div>
  );
}

export default App;
