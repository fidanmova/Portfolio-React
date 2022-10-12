import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react"
import Context from "../../../store/context";

const Contact = () => {

  
  const { sendEmail,handleSubmit, userMessage} = useContext(Context);
  return (
    // Navigation of Contact Form
    <div className="Contact">
      <div className="Contact-Container">
        <div className="nav">
          <div className="ul">
            <div className=" li first">
              <Link className="btn" to="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home page
              </Link>
            </div>

            <div className="li second">
              <Link className="btn" to="/about">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Work & skills
              </Link>
            </div>

            <div className="li third">
              <Link className="btn" to="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                get back home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Form Section  */}
      <div className="sub-contact">
        
        <form onSubmit={sendEmail}>
          <h1 className="touch">get in touch</h1>

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
            <label for="text">LIVE ME A MESSAGE</label>
            <textarea 
      value={userMessage.message}
            name="message" cols="30" rows="4" onChange={handleSubmit} ></textarea>
          </div>

          <button type="submit">submit </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
