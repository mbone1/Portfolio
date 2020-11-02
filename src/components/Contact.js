import React from "react";
import resume from "../assets/resume.pdf";
import { useSpring, animated } from "react-spring";

export default function Contact() {

  const fadeIn = useSpring({
  opacity: 1,
  from: { opacity: 0 },
});

  return (
    <div id="contact1">
      <button
        style={fadeIn}
          className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-phone mt-5"
        id="phone">
          </button>
      <animated.p
        style={fadeIn}
        className="text "
        id="number">
        ‪(814)503-0343
      </animated.p>
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-envelope mt-5 text address"
        id="email">
        </button>
      <animated.p email="m.bonnev10@gmail.com"
        style={fadeIn}
        className="text"
      >m.bonnev10@gmail.com</animated.p>
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-file mt-5"
        id="resume"></button>
      <animated.a
        style={fadeIn}
        className="text"
        href={resume}
        download id="linkresume">
        Resume
      </animated.a>
    </div>
  );
}
      
        
    
       
