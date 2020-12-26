import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h3>React Movies</h3>
      <div className="header-menu">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
