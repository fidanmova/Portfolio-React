import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./contact.scss";
import { useContext } from "react";
import Context from "../../../store/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

export default function Test() {
  const { sendEmail, handleSubmit, userMessage } = useContext(Context);
  return (
    <div className="antialised   ">
      <div className="flex w-full   justify-center items-center  ">
        <div className="justify-between  flex flex-col md:flex-row md:space-x-6 md:space-y-6 space-y-6   w-full sm:p-12 max-w-4xl p-8 rounded-2xl shadow-lg text-white  bg-graytwnd/10 md:mt-28">
          <div className="flex flex-col  space-y-8 justify-between">
            <div>
              <h1 className="font-bol md:text-5xl tracking-wide mb-8 capitalize">
                {" "}
                Get in Touch
              </h1>
            </div>

            <div className="flex flex-col space-y-6 ">
              <div className="inline-flex space-x-4 items-center">
                <AiOutlineMail className="text-goldtwnd md:text-xl" />
                <span className="normal-case md:text-lg text-yellowtwnd md:hover:font-bold">
                  fidanmova@gmail.com
                </span>
              </div>

              <div className="space-x-4 items-center">
                <FontAwesomeIcon
                  className="text-goldtwnd md:text-xl"
                  icon="fa-solid fa-phone "
                />
                <span className="normal-case md:text-lg text-yellowtwnd md:hover:font-bold">
                  +(49) 177 169 87 55
                </span>
              </div>
            </div>

            <div className="flex space-x-2 md:justify-between text-goldtwnd md:text-4xl ">
              <div>
                <a href="https://www.linkedin.com/in/fidandev">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin " className="contact-icon" />
                </a>
              </div>

              <div>
                <a href="https://github.com/fidanmova">
                  <FontAwesomeIcon icon="fa-brands fa-github" className="contact-icon" />
                </a>{" "}
              </div>
            </div>
          </div>
          {/* Form section */}
          <div className="bg-black rounded-xl shadow-lg p-8">
            <form
              onSubmit={sendEmail}
              action=""
              className="flex flex-col space-y-4"
            >
              <div>
                <label
                  className="md:text-lg text-yellowtwnd  md:hover:font-bold"
                  for="name"
                  aria-label="name"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  className="ring-1 ring-goldtwnd w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-4 focus:ring-goldtwnd text-black "
                  type="name"
                  name="name"
                  value={userMessage.name}
                  onChange={handleSubmit}
                  required
                />
              </div>
              <div>
                <label
                  className="md:text-lg text-yellowtwnd md:hover:font-bold "
                  for="email"
                  aria-label="name"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  className="ring-1 ring-goldtwnd w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-4 focus:ring-goldtwnd text-black"
                  type="text"
                  name="email"
                  value={userMessage.email}
                  onChange={handleSubmit}
                  required
                />
              </div>
              <div >
                <label className="md:text-lg text-yellowtwnd " for="email" aria-label="name">
                  {" "}
                  Live me a Message
                </label>
                <textarea
                  className="ring-1 ring-goldtwnd w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-4 focus:ring-goldtwnd text-black "
                  type="text"
                  name="message"
                  value={userMessage.message}
                  onChange={handleSubmit}
                  rows="4"
                />
              </div>
              <button className="inline-block self-end text-goldtwnd md:text-2xl rounded-lg px-6 py-2  md:hover:font-bold ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
