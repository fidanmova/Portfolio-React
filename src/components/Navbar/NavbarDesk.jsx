import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function NavbarDesk() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link className="btn" to="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home page
          </Link>
        </li>
        <li>
          <Link className="btn" to="/about">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Work & skills
          </Link>
        </li>
        <li>
          <Link className="btn" to="/contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}
