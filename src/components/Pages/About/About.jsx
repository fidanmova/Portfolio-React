import React from "react";
import "./about.scss";
import NavbarDesk from "../../Navbar/NavbarDesk";
import NavbarMob from "../../Navbar/NavbarMob";
import ContactBtn from "../../ContactBtn.jsx/ContactBtn";
import InfoText from "./InfoText";
import Projects from "./Projects";
import Skills from "./Skills";



export default function About() {
  return (
    <div className="About">
      <NavbarDesk />
      <NavbarMob/>
      <InfoText/>
      <Projects/>
      <Skills/>
      <ContactBtn/>
    </div>
  );
}
