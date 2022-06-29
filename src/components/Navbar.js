import React from "react";
import { Link } from "react-router-dom";
import ListCountry from "./ListCountry/ListCoutry";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  fontSize: "30px",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <div>
      <ul style={listStyle}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">
            <ListCountry />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
