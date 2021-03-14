import { useState } from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Portfolio2 from "./components/Portfolio2.js";
import LinkedInButton from "./components/LinkedInButton";
import GithubButton from "./components/GithubButton";
import Draggable, { DraggableCore } from "react-draggable";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./components/sketch.js";
import "./App.css";
import Sketch2 from './components/sketch2.js'
import ThreeScene from './components/cube2.js'



export default function App() {
  const [display, setDisplay] = useState("none");
  //will handle state of side panel, about/contact/portfolio'


  function handleClick(pass) {
    setDisplay(pass)
    console.log(display)
  }

  let info;
  if (display === "about") {
    info = (
      <div className="infoBox">
        <span className="info">
          <ThreeScene />
          
        </span>
      </div>
    );
  } else if (display === "portfolio") {
    info =
      (<div className="infoBox">
       <Portfolio2 />
     </div>
     )
  }

  return (
    <>
      <div className="container">
        <P5Wrapper sketch={sketch} />
        <span className="name">Matthew Bonneville
        </span>
          <button className="startBtn" onClick={() => handleClick("about")}>
            about
          </button>
          <button
            className="startBtn2"
            onClick={() => handleClick("portfolio")}>
            portfolio
          </button>
         
          {info}
      </div>
    </>
  );
}

       
             
                  
                  
                  
          






                  
                  
                 
                
                 
             

                  

