import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import "./Header.css";
import logo from "../assets/logo.jpg";
import Headroom from "react-headroom";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="header1">
        <RouterNavLink to="/">
          <img src={logo} className="header_img" alt="Logo" />
        </RouterNavLink>
        <div
          className={`header_container ${isMobileMenuOpen ? "mobileView" : ""}`}
        >
          <ul>
            <li>
              <RouterNavLink className="navlink" to="/">
                Home
              </RouterNavLink>
            </li>
            <li>
            <NavLink smooth className="navlink" to="/#Menu">
                Menu
              </NavLink>
                          </li>
            <li>
              <NavLink smooth className="navlink" to={`${location.pathname}#footer`}>
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="humberger">
          <svg
            onClick={toggleMobileMenu}
            className="humberger_icon"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>

        <div className="orderNow_btn">
          <RouterNavLink className="" to="/ReserveTable">
            Reservations
          </RouterNavLink>
        </div>
      </div>
    </div>
  );
}
