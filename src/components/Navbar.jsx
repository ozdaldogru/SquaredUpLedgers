import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import "../style/Navbar.css";
import {  HamburgerMenuClose, HamburgerMenuOpen } from "../Icons/Icons.jsx";



function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
<>
      <nav className="navbar">
        <div className="nav-container">
          <div className="navbar-item">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
            <img src={Logo} height="100" width="350" alt="Squared Up Ledgers's logo" />
            </span>
          </NavLink>
          </div>
          <div className="navbar-item">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item" id="btn">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>

          </ul>
          </div>



          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgerMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgerMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;

