import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-elementsOnRight">
        <Link to={"/"} className="navlink">
          <p>Hjem</p>
        </Link>
        <Link to={"/tours"} className="navlink">
          <p>Turstier</p>
        </Link>
        <Link to={"/facilities"} className="navlink">
          <p>Fasiliteter</p>
        </Link>
        <Link to={"/booking"} className="navlink">
          <p>Booking</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
