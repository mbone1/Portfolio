import React from "react";
import resume from "../assets/resume.pdf";

export default function Contact() {
  return (
    <div id="contact1">
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-phone mt-5"
        id="phone"></button>
      <p className="text " id="number">
        ‪(814)503-0343
      </p>
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-envelope mt-5 text address"
        id="email"></button>
      <p email="m.bonnev10@gmail.com">m.bonnev10@gmail.com</p>
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-file mt-5"
        id="resume"></button>
      <a className="text " href={resume} download id="linkresume">
        Resume
      </a>
    </div>
  );
}
