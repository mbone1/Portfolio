import { useState } from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import LinkedInButton from "./components/LinkedInButton";
import GithubButton from "./components/GithubButton";
import Draggable, { DraggableCore } from "react-draggable";

export default function App() {
  const [display, setDisplay] = useState("none");
  //will handle state of side panel, about/contact/portfolio
  return (
    <div className="App">
      <section className="container">
        <div className="columns is-multiline is-flex-mobile">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
              <div className="column left">
                <DraggableCore>
                  <h2 className="title is-1">Matt Bonneville</h2>
                </DraggableCore>
                <Draggable>
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="about"
                    onClick={() => {
                      setDisplay("about");
                    }}>
                    about
                  </button>
                </Draggable>
                <Draggable>
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="portfolio"
                    onClick={() => {
                      setDisplay("portfolio");
                    }}>
                    portfolio
                  </button>
                </Draggable>
                <Draggable>
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="contact"
                    onClick={() => {
                      setDisplay("contact");
                    }}>
                    contact
                  </button>
                </Draggable>
                <GithubButton /> <LinkedInButton />{" "}
              </div>

              <div
                className="column right has-text-centered scroll scroller"
                id="rightPanel scroller">
                {display === "about" ? <About /> : null}
                {display === "contact" ? <Contact /> : null}
                {display === "portfolio" ? <Portfolio /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

       
             
                  
                  
                  
          






                  
                  
                 
                
                 
             

                  

