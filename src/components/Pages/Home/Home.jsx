import React from "react";
import Navbar from "../../Navbar/Navbar";
import EndText from "../../EndText/EndText";
import { Link } from "react-router-dom";
import "./home.scss";
import "./animation.scss"; 



const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <p className="homeText_1"> Fidan Mova</p>
      <p className="homeText_2">Full Stack Web Developer</p>
      <Link className="fixed-contact" to="../Contact">
        contact{" "}
      </Link>
      <div className="endText">
        <EndText />
      </div>
    </div>
  );
};

export default Home;
