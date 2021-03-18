import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Head from "./head";


export default function About() {
    const [about, setAbout] = useState(false);


    const colorChange = useSpring({
      reverse: !about,
      // reset: !about,
      from: { color: "grey" },
      to: { color: "white" },
      config: { duration: 1000 },
    });
    
    const { size, ...springProps } = useSpring({
      reverse: !about,
      // reset: about,
      // size: about ? "0%" : "100%",
      opacity: !about ? 1 : 0,
      // delay: 500,
      // cursor: "pointer",
      config: { mass: 5, tension: 210, friction: 50, precision: 0.000001 },
      from: {
        size: "0%",
        color: "black",
        opacity: 0,
      },
      to: {
        color: "white",
        size: "100%",
        borderTop: "2px solid pink",
        opacity: 1,
      },
    });


    return (
    <>
    <animated.h2 className="hov" style={colorChange} onClick={() => setAbout(!about)}>
        About
    </animated.h2>
      <animated.div style={{ height: size, width: size, ...springProps }}>
        <Head />
        {/* <animated.div className="i"> */}
        {/* <div style={{ height: "100%", width: "100%" }}> */}
          <h4 style={{ color: "pink" }}>Profession:</h4>
          <span>Full-stack web developer </span>
          <h4 style={{ color: "pink" }}>Location:</h4>
          <span>Arizona, USA</span>
          <h4 style={{ color: "pink" }}>Likes:</h4>
          <span style={{ color: "green" }}>Tea</span>
          <h4 style={{ color: "pink" }}>Dislikes:</h4>
          <span style={{ color: "red" }}>Sand</span>
          <h4 style={{ color: "pink" }}>Contact:</h4>
          <span>m.bonnev9@gmail.com</span>
          <br></br>
          <span>508-768-9911</span>
          <h4 style={{ color: "pink" }}>Links:</h4>
          <p>m.bonnev9@gmail.com</p>
          {/* <span>508-768-9911</span>
          <span>508-768-9911</span> */}
        {/* </div> */}
      </animated.div>
      </>)
}