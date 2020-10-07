import React, { Component } from "react";
import Draggable from "react-draggable";
import portrait from "../assets/portrait.jpg";

class About extends Component {
  constructor() {
    super();
    this.state = {
      showAbout: false,
      showContact: false,
      showPortfolio: false,
    };
  }
  render() {
    return (
      <div id="about1">
        <figure className="is-fullwidth">
          <Draggable>
            <img
              id="img2"
              src={portrait}
              alt="Photograph of Matt Bonneville "
            />
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
              I'm Matt. Currently I'm attending a coding boot-camp offered thru
              University of Arizona. I have a passion for problem solving and
              learning, I'm from California originally, but have lived in
              Arizona for most of my life. I've worked in various customer
              service and management positions. In my free time I drink tea,
              cook, and ride my bike. Right now, I'm excited to learn more about
              programming.
            </strong>
          </p>
        </Draggable>
      </div>
    );
  }
}
export default About;
