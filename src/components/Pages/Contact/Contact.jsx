import React from "react";
import NavbarDesk from "../../Navbar/NavbarDesk";
import NavbarMob from "../../Navbar/NavbarMob";
import ContactBtn from "../../ContactBtn.jsx/ContactBtn";
import EndText from "../../EndText/EndText";
import "./contact.scss";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="Contact">
      <NavbarDesk />
      <NavbarMob />
      <Form />
      <EndText />
      <ContactBtn />
    </div>
  );
};
export default Contact;
