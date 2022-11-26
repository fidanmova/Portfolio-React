import React, {useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

import "./navbar.scss";

export default function Test() {
  const [selects,setSelects]=useState()
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link className="btn" to="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home page
          </Link>
        </li>

        <li>
          {" "}
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
      <div>
        {/* <h1>{selects}</h1> */}
      <select value={selects} onChange={e=>setSelects(e.target.value)} >
        <option>Navbar</option>
        <option>  <Link className="btn" to="/">

            Home page
          </Link></option>
        <option>orange</option>
        <option>mango</option>
      </select>
      </div>
    </nav>
  );
}
