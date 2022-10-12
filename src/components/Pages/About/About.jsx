import React from "react";
import "./about.scss";
import Navbar from "../../Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../../../images/logo.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="About">
      <Navbar />
      <Link className="fixed-contact" to="../Contact">
        contact{" "}
      </Link>
      {/* Info Text Section */}
      <div className="InfoText">
        <div data-aos="flip-left" className="Info ">
          <p className="about_text">
            I'm Full Stack Web Developer who newly-graduated a 1 year of
            intensive study in Full Stack web development of Digital Career
            Institute.
          </p>
          <p className="about_text">
            {" "}
            Seeking a position to apply experience from Web Development.{" "}
          </p>
          <p className="about_text">
            {" "}
            Excited to explore other technologies and frameworks and improve my
            knowledge.{" "}
          </p>
        </div>
      </div>

      {/* Project section */}
      <section className="projects_wrapper">
        <div className="projects">
          <div className="item-img img-3"></div>
          <div className="description">
            <img src={Logo} alt="" className="logo-img" />
            <p className="text-2">MERN Stack Chat App</p>
            <p className="text-1">
              {" "}
              MERN Stack Chat App is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.{" "}
            </p>
            <p className="text-3">Technologies: React, Chakra UI, Mongo Db, Socket.io, Node JS, Express JS</p>
          </div>
        </div>

        <div className="projects">
          <div className="item-img img-3"></div>
          <div className="description">
            <img src={Logo} alt="" className="logo-img" />
            <p className="text-2">Dev-Shed Full Stack App</p>
            <p className="text-1">
              {" "}
              Dev-Shed App is a Full Stack Social App. Uses  Next.js as a React framework, Tailwind UI for rapid styling,  and stores user details in encrypted format in Mongo DB Database {" "}
            </p>
            <p className="text-3">Technologies: Next.js, Tailwind UI, Mongo Db</p>
          </div>
        </div>

        <div className="projects">
          <div className="item-img img-3"></div>
          <div className="description">
            <img src={Logo} alt="" className="logo-img" />
            <p className="text-2">My Project</p>
            <p className="text-1">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              cupiditate totam quidem! Quasi, debitis atque optio enim
              architecto aliquam doloribus assumenda sit cupiditate similique
              quod fuga ut illo, amet facere.{" "}
            </p>
            <p className="text-3">Technologies: React, SCSS, HTML5</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div className="Skills">
        <h1 className="skills-head"> skills </h1>
        <article className="skill">
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-html5"
                size="5x"
                className="i"
              />
              <p>html</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-sass"
                size="5x"
                className="i"
              />
              <p>sass</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-css3"
                size="5x"
                className="i"
              />
              <p>CSS</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-bootstrap"
                size="5x"
                className="i"
              />
              <p>bootstrap</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon icon="fa-brands fa-js" size="5x" className="i" />
              <p>JS</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-react"
                size="5x"
                className="i"
              />
              <p>react</p>
            </div>
          </div>
          <div className="skill-box">
            <div className="half">
              <FontAwesomeIcon
                icon="fa-brands fa-node-js"
                size="5x"
                className="i"
              />
              <p>Node-js</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
