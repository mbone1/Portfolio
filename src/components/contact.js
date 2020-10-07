import React from "react";

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
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-envelope mt-5"
        id="email"></button>
      <p className="text " id="address">
        m.bonnev10@gmail.com
      </p>
      <button
        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-file mt-5"
        id="resume"></button>
      <a className="text " id="linkresume" href="Resume-Matthew-Bonneville.pdf">
        Resume
      </a>
    </div>
  );
}
