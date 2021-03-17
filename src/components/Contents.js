
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import About from './About'
import Portfolio from './Portfolio'
import '../css.css'


export default function Contents() {
  const [size, reSize] = useState("auto")

  return (
    <div className="container-fluid">
      <div style={{height: "47%"}}>
        <About />
        <Portfolio />
       
  
      

      
    </div>
    </div>
  );
}
