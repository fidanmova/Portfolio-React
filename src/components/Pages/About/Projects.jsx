import React from "react";
import "./about.scss";
import Logo from "../../../images/logo.jpeg";

export default function Projects() {
  return (
    <div className="Projects">
      {/* Images */}
      <section className="img-container">
        <div className="item-img img-1"> </div>
        <div className="item-img img-2"></div>
        <div className="item-img img-3"></div>
      </section>
      {/* LOGO */}
      <section className="logo-container">
        <div>
          <a
            className="link"
            href="https://devshed.vercel.app/"
        
            target="_about"
          >
            <img src={Logo} alt="" className="logo-img" />{" "}
          </a>
        </div>
        <div>
          <a
            className="link"
            href="https://chat-j1bt.onrender.com/"
            target="_about"
          >
            <img src={Logo} alt="" className="logo-img" />{" "}
          </a>
        </div>
     
        <div>
          <a
            className="link"
            href="https://fidanportfolio.vercel.app/"
            target="_about"
          >
            <img src={Logo} alt="" className="logo-img" />{" "}
          </a>
        </div>
      </section>
      {/* Projects */}
      <section className="description_container">
        {/* *********************FIRST ***********/}
        <div>
          <p className="text-1">
            <a
              className="link"
              href="https://devshed.vercel.app/"
              target="_about"
            >
              DevShed
            </a>
          </p>
          <p className="text-2">
            Dev-Shed App is a Full Stack Social App. Uses Next.js as a React
            framework, Tailwind CSS and daisyUi for rapid styling, and stores
            user details in encrypted format in Mongo DB Database{" "}
          </p>
          <p className="text-3">
            Technologies: Next.js, Tailwind CSS, Daisy ui, Mongo Db, Node js,
            Vercel, nodemailer, mapbox, cloudinary
          </p>
          <section className="img-container">
        <div className="mob-img img-1"> </div>
      </section>
        </div>

        {/* *********************SECOND ***********/}
        <div>
          <p className="text-1">
            <a
              className="link"
              href="https://chat-j1bt.onrender.com/"
              target="_about"
            >
              Chat App
            </a>
          </p>
          <p className="text-2">
            Chat App is a Full Stack Chatting App. Uses React.js, Socket.io for
            real time communication, Chakra.UI for styling and stores user
            details in encrypted format in Mongo DB Database.{" "}
          </p>
          <p className="text-3">
            Technologies: React, Chakra UI, Mongo Db, Socket.io, Node JS,
            Express JS, Render
          </p>
          <section className="img-container">
        <div className="mob-img img-2"> </div>
      </section>
        </div>
        {/* *********************THIRD ***********/}
        <div>
          <p className="text-1">
            <a
              className="link"
              href="https://fidanportfolio.vercel.app/"
              target="_about"
            >
              Portfolio
            </a>
          </p>
          <p className="text-2">
            My Portfolio is a frontend project. The Project has been built on
            front-end JavaScript library React. It uses Sass and Tailwind CSS
            for styling and Email js in order to be able to receive the emails
          </p>
          <p className="text-3">
            Technologies: React, SCSS, Tailwind CSS, HTML5, Email js
          </p>
          <section className="img-container">
        <div className="mob-img img-3"> </div>
      </section>
        </div>
      </section>
    </div>
  );
}
