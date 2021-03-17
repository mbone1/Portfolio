import "./css.css";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Contents from './components/Contents'
// import Head from "./components/head";


export default function App2() {
  const [portfolio, setPortfolio] = useState(false);
  function Portfolio() {
    const colorChange = useSpring({
      reverse: portfolio,
      reset: portfolio,
      from: { color: "grey" },
      to: { color: "white" },
      config: { duration: 1000 },
    });

    return (
      <>
        <animated.h2 style={colorChange} onClick={() => setPortfolio(!portfolio)}>
          Portfolio
        </animated.h2>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 style={{color: "orange"}}>Matt Bonneville</h2>
        </div>
        <div className="container">
          <div className="row">
            <Contents />
          </div>
        </div>
      </div>
    </>
         );
        }
         
       


  

        
         
     
       






  

      


