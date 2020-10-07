import React, { Component } from "react";
import "./App.css";
import "./style.css";
import selfportrait from "./assets/selfportrait.jpg";
import Draggable, { DraggableCore } from "react-draggable";
import aboutButton from "./components/aboutButton";
import portfolioButton from "./components/portfolioButton";
import contactButton from "./components/contactButton";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import portrait from "./assets/portrait.jpg";
import projects from "./assets/projects.js";
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
                  <h2 className="title is-1">Matt Bonneville</h2>
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
                      {this.state.show ? "About" : "About"}
                    </button>
                  </Draggable>
                  <Draggable>
                    <button
                      className="button is-block is-outlined is-dark is-fullwidth is-light"
                      id="about"
                      onClick={() => {
                        this.setState({
                          showPortfolio: !this.state.showPortfolio,
                          showContact: false,
                          showAbout: false,
                        });
                      }}>
                      {this.state.show ? "Portfolio" : "Portfolio"}
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
                      {this.state.showContact ? "Contact" : "Contact"}
                    </button>
                  </Draggable>
                  <Draggable>
                      <GithubButton />
                  </Draggable>
                  <Draggable>
                    <LinkedInButton             />
                  </Draggable>
                </div>
                <div className="column right has-text-centered" id="rightPanel">
                  {/* <!-- beginning of portfolio page --> */}

                  {this.state.showPortfolio ? (
                    <div id="portfolio1">
                      <div></div>
                    </div>
                  ) : null}

                  {/* <!-- end of portfolio page -->
                        <!-- beginning of contact page --> */}

                  {this.state.showContact ? <Contact /> : null}

                  {/* <!-- end of contact page --> */}

                  {/* <!-- beginning of about page --> */}
                  {this.state.showAbout ? <About /> : null}
                  {/* <!-- end of about page --> */}
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
                  
                  
                 
                
                 
             

                  

