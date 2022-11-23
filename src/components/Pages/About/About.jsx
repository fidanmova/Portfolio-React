import React from "react";
import "./about.scss";
import NavbarDesk from "../../Navbar/NavbarDesk";
import NavbarMob from "../../Navbar/NavbarMob";
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
      <NavbarDesk />
      <NavbarMob/>
      <Link className="fixed-contact" to="../Contact">
        contact{" "}
      </Link>
      {/* Info Text Section */}
      <div className="InfoText">
        <div data-aos="flip-left" className="Info ">
          <p className="about_text">
            I am a Full Stack Web Developer who newly-graduated a 1 year of
            intensive study in Full Stack web development of Digital Career
            Institute.
          </p>
          <p className="about_text">
            Staying passionate, motivated and enjoying to explore new
            technologies and frameworks is one of my strong features.
          </p>
          <p className="about_text">
            Excited to improve my knowledge by seeking out new technologies and
            staying up-to-date on trends in the industry.
          </p>
          <p className="about_text">
            I am excitedly looking forward to building easy-to-use,
            user-friendly websites, and applications.
          </p>
          <p className="about_text">
            Communication, working responsibly and working team-oriented are my
            values.
          </p>
          <p className="about_text">
            Seeking a position to apply my experience and passion in web
            development for finding creative solutions.
          </p>
        </div>
      </div>

      {/* Project section */}
      <section className="projects_wrapper">
        <div className="projects">
          <div className="item-img img-1"></div>
          <div className="description">
            <div>
              <a
                className="link"
                href="https://chat-j1bt.onrender.com/"
                target="_about"
              >
                <img src={Logo} alt="" className="logo-img" />{" "}
              </a>
            </div>
            <p className="text-2">
              {" "}
              <a
                className="link"
                href="https://chat-j1bt.onrender.com/"
                target="_about"
              >
                {" "}
                MERN Stack Chat App
              </a>
            </p>
            <p className="text-1">
              {" "}
              MERN Stack Chat App is a Full Stack Chatting App. Uses React.js,
              Socket.io for real time communication, Chakra.UI for styling and
              stores user details in encrypted format in Mongo DB Database.{" "}
            </p>
            <p className="text-3">
              Technologies: React, Chakra UI, Mongo Db, Socket.io, Node JS,
              Express JS, Render
            </p>
          </div>
        </div>

        <div className="projects">
          <div className="item-img img-2"></div>
          <div className="description">
            <a
              className="link"
              href="https://devshed.vercel.app/"
              target="_about"
            >
              <img src={Logo} alt="" className="logo-img" />{" "}
            </a>

            <p className="text-2">
              {" "}
              <a
                className="link"
                href="https://devshed.vercel.app/"
                target="_about"
              >
                {" "}
                Dev-Shed Full Stack App{" "}
              </a>
            </p>
            <p className="text-1">
              {" "}
              Dev-Shed App is a Full Stack Social App. Uses Next.js as a React
              framework, Tailwind CSS & daisyUi for rapid styling, and stores
              user details in encrypted format in Mongo DB Database{" "}
            </p>
            <p className="text-3">
              Technologies: Next.js, Tailwind CSS, Daisy ui, Mongo Db, Node js,
              Vercel, nodemailer, mapbox, cloudinary
            </p>
          </div>
        </div>

        <div className="projects">
          <div className="item-img img-3"></div>
          <div className="description">
            <a
              className="link"
              href="https://fidanportfolio.vercel.app/"
              target="_about"
            >
              <img src={Logo} alt="" className="logo-img" />{" "}
            </a>
            <p className="text-2">
              <a
                className="link"
                href="https://fidanportfolio.vercel.app/"
                target="_about"
              >
                {" "}
                My Portfolio Project{" "}
              </a>
            </p>
            <p className="text-1">
              {" "}
              My Portfolio is a frontend project. The Project has been built on
              front-end JavaScript library React. It uses Sass ( syntactically
              awesome style sheets) for styling and Email js in order to be able
              to receive the emails
            </p>
            <p className="text-3">Technologies: React, SCSS, HTML5, Email js</p>
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
