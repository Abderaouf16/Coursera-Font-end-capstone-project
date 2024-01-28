import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="header1">
        <NavLink to="/">
          <img src={logo} className="header_img" alt="Logo" />
        </NavLink>
        <div
          className={`header_container ${isMobileMenuOpen ? "mobileView" : ""}`}
        >
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#">Order</NavLink>
            </li>
            <li>
              <NavLink to="#">Menu</NavLink>
            </li>
            <li>
              <NavLink to="#">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="#">About us</NavLink>
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
          <NavLink className="" to="#">
            Order Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}
