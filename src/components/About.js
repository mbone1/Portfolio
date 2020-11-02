import React from "react";
import Draggable from "react-draggable";
import portrait from "../assets/portrait.jpg";
import { useSpring, animated } from "react-spring";


export default function About() {
  const fadeIn = useSpring({
  opacity: 1,
  from: { opacity: 0 },
})
  
  return (
    
    <animated.div id="about1">
      <animated.figure className="is-fullwidth">
        <Draggable>
            <animated.img style={fadeIn} id="img2" src={portrait} alt="Photograph of Matt Bonneville " />
        </Draggable>
        {/* <button
                          className="button is-outlined is-dark is-light fas fa-paint-brush"
                          id="paint"></button>
                        <button
                          className="button is-outlined is-dark is-light fas fa-camera-retro"
                          id="camera"></button> */}
      </animated.figure>
      <Draggable>
        <animated.p style={fadeIn} className="description">
          <strong>
            {" "}
            I'm Matt. I like tea, video games and problem solving. I'm a graduate of University of Arizona's full stack web development bootcamp.
          </strong>
        </animated.p>
      </Draggable>
    </animated.div>
  
   
  );
}
