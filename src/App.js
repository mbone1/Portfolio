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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus accusamus maiores quidem at aut, quo repudiandae
          corporis dolor quia deserunt accusantium nobis molestiae dignissimos,
          error, saepe tempore deleniti corrupti obcaecati?
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

    // <div className="App">
    //   <section className="container">
    //     <div className="columns is-multiline is-flex-mobile">
    //       <div className="column is-8 is-offset-2 register">
    //         <div className="columns">
    //           <div className="column left">
    //             <DraggableCore>
    //               <h2 className="title is-1">Matt Bonneville</h2>
    //             </DraggableCore>
    //             <Draggable>
    //               <button
    //                 className="button is-block is-outlined is-dark is-fullwidth is-light"
    //                 id="about"
    //                 onClick={() => {
    //                   setDisplay("about");
    //                 }}>
    //                 about
    //               </button>
    //             </Draggable>
    //             <Draggable>
    //               <button
    //                 className="button is-block is-outlined is-dark is-fullwidth is-light"
    //                 id="portfolio"
    //                 onClick={() => {
    //                   setDisplay("portfolio");
    //                 }}>
    //                 portfolio
    //               </button>
    //             </Draggable>
    //             <Draggable>
    //               <button
    //                 className="button is-block is-outlined is-dark is-fullwidth is-light"
    //                 id="contact"
    //                 onClick={() => {
    //                   setDisplay("contact");
    //                 }}>
    //                 contact
    //               </button>
    //             </Draggable>
    //             <GithubButton /> <LinkedInButton />{" "}
    //           </div>

    //           <div
    //             className="column right has-text-centered scroll scroller"
    //             id="rightPanel scroller">
    //             {display === "about" ? <About /> : null}
    //             {display === "contact" ? <Contact /> : null}
    //             {display === "portfolio" ? <Portfolio /> : null}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

       
             
                  
                  
                  
          






                  
                  
                 
                
                 
             

                  

