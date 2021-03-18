import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Laptop from "./laptop";



export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(false);

  const colorChange = useSpring({
    reverse: portfolio,
    reset: portfolio,
    from: { color: "grey" },
    to: { color: "white" },
    config: { duration: 1000 },
  });

  const { size, ...springProps } = useSpring({
    reverse: portfolio,
    reset: portfolio,
    // size: portfolio ? "0%" : "100%",
    opacity: portfolio ? 0 : 1,
    // delay: 500,
    config: { mass: 5, tension: 210, friction: 50, precision: 0.000001 },
    from: {
      // size:"0%",
      height: "0%",
      width: "0%",
      color: "black",
      opacity: 0,
    },
    to: {
      color: "white",
      // size: "100%",
      height: "100%",
      width: "100%",
      borderTop: "2px solid pink",
      opacity: 1,
    },
  });

  return (
    <>
      <animated.h2 style={colorChange} onClick={() => setPortfolio(!portfolio)}>
        Portfolio
      </animated.h2>
      <animated.div style={{ height: size, width: size, ...springProps }}>
        <Laptop />
        {/* <animated.div className="i"> */}
        {/* <div style={{ height: "100%", width: "100%" }}> */}
        <h3 style={{ color: "lightblue" }}>L-plan</h3>
          <h4 style={{ color: "pink" }}>Description:</h4>
          <span>CRUD Lesson plan application</span>
          <h4 style={{ color: "pink" }}>Technologies:</h4>
          <span>React.js, SCSS</span>
          <h4 style={{ color: "pink" }}>Links:</h4>
          <span>Tea</span>
        {/* </div> */}
      </animated.div>
    </>
  );
}