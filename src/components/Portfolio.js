import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Laptop from "./laptop";




export default function Portfolio() {
  const [portfolio, setPortfolio] = useState();


  const colorChange = useSpring({
    reverse: !portfolio,
    // reset: portfolio,
    from: { color: "grey" },
    to: { color: "white" },
    config: { duration: 1000 },
  });

  const { size, ...springProps } = useSpring({
    reverse: !portfolio,
    // reset: portfolio,
    // size: portfolio ? "0%" : "100%",
    opacity: !portfolio ? 0 : 1,
    // delay: 500,
    // config: { mass: 1, tension: 2, friction: 5 },
    config: { duration: 1000 },
    from: {
      height: "0%",
      width: "0%",
      color: "black",
      opacity: 0,
    },
    to: {
      color: "white",
      height: "100%",
      width: "100%",
      borderTop: "2px solid pink",
      opacity: 1,
    },
  });

  return (
    <>
      <animated.h2
        className="hov"
        style={colorChange}
        onClick={() => setPortfolio(!portfolio)}>
        Portfolio
      </animated.h2>
      <animated.div style={{ height: size, width: size, ...springProps }}>
        <Laptop />
      </animated.div>
    </>
  );
}