import React from "react";
import "./contact.scss";
import { useContext } from "react";
import Context from "../../../store/context";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

const Contact = () => {
  const { sendEmail, handleSubmit, userMessage } = useContext(Context);
  return (
    <div className="Contact">
      <Navbar/>
      <form onSubmit={sendEmail}>
        <div className="contactMe">
          <h1 className="touch">get in touch 
          {" "}
          {" "}
          {" "}
          <a href="https://github.com/fidanmova">
          <FontAwesomeIcon
                icon="fa-brands fa-github"
                size="2x"
                className="i"
              />
          </a>
          {" "}
          {" "}
          {" "}
          {" "}
          <a href="https://www.linkedin.com/in/fidan-mova/">
          <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                size="2x"
                className="i"
              />
          </a>
          </h1>

        </div>
           <div className="form-input">
            <label for="name" aria-label="name">
              {" "}
            </label>
            <input
              type="name"
              name="name"
              value={userMessage.name}
              placeholder="YOUR NAME..."
              onChange={handleSubmit}
              required
            />
          </div> 
          <div className="form-input">
            <label for="email" aria-label="email">
              {" "}
            </label>
            <input
              value={userMessage.email}
              type="text"
              name="email"
              placeholder="YOUR EMAIL..."
              autocomplete="off"
              onChange={handleSubmit}
              required
            />
          </div>
          <div className="form-input">
            <label className="message" for="text">LIVE ME A MESSAGE</label>
            <textarea
              value={userMessage.message}
              name="message"
              cols="95"
              rows="4"
              onChange={handleSubmit}
            ></textarea>
          </div> 
          <button type="submit">submit </button>
        </form>
      </div>
  );
};
export default Contact;
