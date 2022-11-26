import React from "react";
import NavbarDesk from "../../Navbar/NavbarDesk";
import NavbarMob from "../../Navbar/NavbarMob";
import ContactBtn from "../../ContactBtn.jsx/ContactBtn";
import EndText from "../../EndText/EndText";
import Intro from "./Intro";
import "./home.scss";


const Home = () => {
  return (
    <div className="Home">
      <NavbarDesk />
      <NavbarMob />
      <Intro />
       <ContactBtn /> 
      <EndText /> 
    </div>
  );
};
export default Home;
