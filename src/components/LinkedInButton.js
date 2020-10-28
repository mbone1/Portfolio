import React from "react";
import { useSpring, animated } from "react-spring";


export default function LinkedInButton() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <animated.div style={fadeIn}>
      <a href="https://www.linkedin.com/in/matthew-bonneville-944a431a9/">
        <button
          className="button is-block is-outlined is-dark is-fullwidth is-light fab fa-linkedin-in"
          id="linkedin"
          />
      </a>
    </animated.div>
  );
}
