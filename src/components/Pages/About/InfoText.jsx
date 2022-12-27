import React from "react";
import "./about.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InfoText() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="flip-left" className="Info ">
        <div className="trans">
          <div class="box-decoration-slice  rounded-3xl px-4 ...">
          <p className="about_text ">
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
            I am looking forward to build easy-to-use, user-friendly websites,
            and applications.
          </p>
          <p className="about_text">
            Communication, working responsibly and working team-oriented are my
            values.
          </p>
          <p className="about_text">
            Seeking for a position to apply my experience and passion in web
            development for finding creative solutions.
          </p>
        
          </div>

        </div>
      </div>
    </>
  );
}
