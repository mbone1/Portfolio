import React from "react";
import Draggable from "react-draggable";
import portrait from "../assets/portrait.jpg";

export default function About() {
  return (
    <div id="about1">
      <figure className="is-fullwidth">
        <Draggable>
          <img id="img2" src={portrait} alt="Photograph of Matt Bonneville " />
        </Draggable>
        {/* <button
                          className="button is-outlined is-dark is-light fas fa-paint-brush"
                          id="paint"></button>
                        <button
                          className="button is-outlined is-dark is-light fas fa-camera-retro"
                          id="camera"></button> */}
      </figure>
      <Draggable>
        <p className="description">
          <strong>
            {" "}
            I'm Matt. I like tea, video games and problem solving. I'm currently
            attending a coding boot-camp offered thru U of A.
          </strong>
        </p>
      </Draggable>
    </div>
  );
}
