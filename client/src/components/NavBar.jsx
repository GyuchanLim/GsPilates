import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <nav>
      <Link to="/">Posts Link</Link>
      {" | "}
      <Link to="/new">New Post</Link>
    </nav>
  )
}

export default NavBar;

// Post List Link (Root path) | Link to Create New Post (Post Form)