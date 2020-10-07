import React, { Component } from "react";
// import "./App.css";
import "./style.css";
import Draggable, { DraggableCore } from "react-draggable";
import Contact from "./components/contact.js";
import About from "./components/about.js";
import Portfolio from "./components/portfolio.js";
import LinkedInButton from "./components/LinkedInButton";
import GithubButton from "./components/GithubButton";



class App extends Component {
  constructor() {
    super();
    this.state = {
      showAbout: false,
      showContact: false,
      showPortfolio: false,
    };
  }
  render() {
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
                        this.setState({
                          showAbout: !this.state.showAbout,
                          showContact: false,
                          showPortfolio: false,
                        });
                      }}>
                      {this.state.show ? "about" : "about"}
                    </button>
                  </Draggable>
                  <Draggable>
                    <button
                      className="button is-block is-outlined is-dark is-fullwidth is-light"
                      id="portfolio"
                      onClick={() => {
                        this.setState({
                          showPortfolio: !this.state.showPortfolio,
                          showContact: false,
                          showAbout: false,
                        });
                      }}>
                      {this.state.show ? "portfolio" : "portfolio"}
                    </button>
                  </Draggable>
                  <Draggable>
                    <button
                      className="button is-block is-outlined is-dark is-fullwidth is-light"
                      id="contact"
                      onClick={() => {
                        this.setState({
                          showContact: !this.state.showContact,
                          showAbout: false,
                          showPortfolio: false,
                        });
                      }}>
                      {this.state.showContact ? "contact" : "contact"}
                    </button>
                  </Draggable>
                    <GithubButton />
                  <LinkedInButton />
                </div>
                <div className="column right has-text-centered" id="rightPanel">
                  {/* <!-- beginning of about page --> */}
                  {this.state.showAbout ? <About /> : null}
                  {/* <!-- end of about page -->
                        <!-- beginning of contact page --> */}
                  {this.state.showContact ? <Contact /> : null}
                  {/* <!-- end of contact page --> */}
                  {/* <!-- beginning of portfolio page --> */}
                  {this.state.showPortfolio ? <Portfolio /> : null}
                  {/* <!-- end of portfolio page --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;

       
             
                  
                  
                  
          






                  
                  
                 
                
                 
             

                  

