import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/prices">Prices</Link>
      {" | "}
      <Link to="/appointments">Appointment</Link>
      {" | "}
      <Link to="/contacts">Contact</Link>
    </nav>
  )
}

export default NavBar;
