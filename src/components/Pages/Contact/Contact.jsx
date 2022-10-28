import React from "react";
import "./contact.scss";
import { useRef, useContext } from "react";
import Context from "../../../store/context";
import Navbar from "../../Navbar/Navbar";

const Contact = () => {
  const { sendEmail, handleSubmit, userMessage } = useContext(Context);
  return (
    <div className="Contact">
      <Navbar/>
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
