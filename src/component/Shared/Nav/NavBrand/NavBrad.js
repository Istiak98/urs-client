import React from "react";
import "./NavBrand.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Navbar.Brand>
      <Link to="/" className="brandTitle">
        <span>
          University Recommend <span className="text-danger"> System</span>
        </span>
      </Link>
    </Navbar.Brand>
  );
};

export default NavBrand;