import React from "react";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

export default function Skills() {
  return (
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
            <FontAwesomeIcon icon="fa-brands fa-sass" size="5x" className="i" />
            <p>sass</p>
          </div>
        </div>
        <div className="skill-box">
          <div className="half">
            <FontAwesomeIcon icon="fa-brands fa-css3" size="5x" className="i" />
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
  );
}
