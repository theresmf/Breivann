import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Facilites from "./pages/Facilities";
import Booking from "./pages/Booking";
import Tours from "./pages/Tours";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header"></header>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="facilities" element={<Facilites />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
