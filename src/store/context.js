import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Context = React.createContext();

export function ContextProvider(props) {
  const [active, setActive] = useState(false);
  const toggleProjects = () => {
    setActive(!active);
  };

  //Form Section
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [allMessages, setAllMessages] = useState([]);
  //  for Success message
  const [submit, setSubmit] = useState(false);
  //  for Submit message appears only if the Form is valid
  const [valid, setValid] = useState(false);
  // const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (userMessage.name && userMessage.email && userMessage.message) {
      setValid(true);
    }
    setSubmit(true);
  };

  // Send Email use Email
  const sendEmail = (e) => {
    e.preventDefault();
    // setFormErrors(validate(userMessage));
    emailjs
      .sendForm(
        "service_x6cefae",
        "template_rfgpggr",
        e.target,
        process.env.REACT_APP_KEY
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    setSubmit(true);
  };

  return (
    <Context.Provider
      value={{
        toggleProjects,
        active,
        sendEmail,
        userMessage,
        setUserMessage,
        allMessages,
        setAllMessages,
        submit,
        setSubmit,
        handleSubmit,
        valid,
        setValid,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export default Context;
