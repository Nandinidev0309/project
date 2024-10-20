import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>Design Studio</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <NavLink to="/" className="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="icon" onClick={togglemenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="content">
            <h2>Responsive Navbar</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
