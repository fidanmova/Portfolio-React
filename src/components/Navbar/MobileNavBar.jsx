import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavBar()   {
    return (
      <nav className="mobile">
        <ul>
          <li>
            {" "}
            <Link className="btn" to="/">
              Home page
            </Link>
          </li>

          <li>
            {" "}
            <Link className="btn" to="/about">
              Work & skills
            </Link>
          </li>

          <li>
            <Link className="btn" to="/contact">
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

