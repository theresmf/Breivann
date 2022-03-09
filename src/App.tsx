import React from "react";
import Auth from "./auth";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="app">
          <h1>Page title</h1>
          <Auth></Auth>
        </div>
      </body>
    </div>
  );
}

export default App;
