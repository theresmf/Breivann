import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="fullscreen-background">
      <h1>Home</h1>
      <div className="navigationElementsWrapper">
        <NavLink to={"register"}>
          <div className="navigationElement">Registrer</div>
        </NavLink>
        <NavLink to={"overview"}>
          <div className="navigationElement">Oversikt</div>
        </NavLink>
      </div>
    </div>
  );
}

export default App;
