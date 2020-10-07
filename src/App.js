import React, { Component } from "react";
import "./App.css";
import "./style.css";

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

                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="about"
                    onClick={() => {
                      this.setState({
                        showAbout: !this.state.showAbout,
                        showContact: false,
                        showPortfolio: false
                      });
                    }}>
                    {this.state.show ? "About" : "About"}
                  </button>
               
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="about"
                    onClick={() => {
                      this.setState({
                        showPortfolio: !this.state.showPortfolio,
                        showContact: false,
                        showAbout: false
                      });
                    }}>
                    {this.state.show ? "Portfolio" : "Portfolio"}
                  </button>

                  
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light"
                    id="contact"
                    onClick={() => {
                      this.setState({
                        showContact: !this.state.showContact,
                        showAbout: false,
                        showPortfolio: false
                      });
                    }}>
                    {this.state.showContact ? "Contact" : "Contact"}
                  </button>

                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light fab fa-github"
                    id="github"
                    href="https://github.com/mbone1"></button>
                  <button
                    className="button is-block is-outlined is-dark is-fullwidth is-light fab fa-linkedin-in"
                    id="linkedin"></button>
                </div>
                <div className="column right has-text-centered" id="rightPanel">


             





                {/* <!-- beginning of portfolio page --> */}
                    {this.state.showPortfolio ? (
                  <div id="portfolio1">
                    <button
                      className="button is-block is-fullwidth is-outlined is-dark is-light"
                      id="weather">
                      <strong>Weather Dashboard</strong>
                    </button>
                    <figure
                      className="image is-block is-fullwidth imgB"
                      id="wdb">
                      {" "}
                      <img
                        id="img1"
                        src="screencap.PNG"
                        alt="Weather Dashboard"
                      />
                      <strong className="read">
                        A simple application using various APIs from
                        OpenWeather. The user enters a city and the app returns
                        current weather and a five day forecast.{" "}
                      </strong>
                      <a href="http://mbone1.github.io/legendary-barnacle/"></a>
                    </figure>
                    <button
                      className="button is-block is-fullwidth is-outlined is-dark is-light"
                      id="geo">
                      <strong>Easy Geo-Tracker</strong>
                    </button>
                    <figure
                      className="image is-block is-fullwidth imgB"
                      id="egt">
                      {" "}
                      <img
                        id="img1"
                        src="screencap2.PNG"
                        alt="Easy Geo-Tracker"
                      />
                      <strong>
                        A group project, this application is built from various
                        API's. The user enters a city and satellite imagery,
                        local time, some statistics and a map of the area.{" "}
                      </strong>{" "}
                    </figure>
                    <button
                      className="button is-block is-fullwidth is-outlined is-dark is-light"
                      id="scheduler">
                      <strong>Work-Day Scheduler</strong>
                    </button>
                    <figure
                      className="image is-block is-fullwidth imgB"
                      id="wds">
                      {" "}
                      <img
                        id="img1"
                        src="screencap3.PNg"
                        alt="Work-day Scheduler"
                      />
                      <strong>
                        A simple to-do list/calendar application, user enters a
                        task which is saved in local storage and available upon
                        refreshing the page.
                      </strong>{" "}
                    </figure>
                    </div>
                    ) : null}

                  {/* <!-- end of portfolio page -->
                        <!-- beginning of contact page --> */}
                  

                  {this.state.showContact ? (
                    <div id="contact1">
                      <button
                        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-phone mt-5"
                        id="phone"></button>
                      <p className="text " id="number">
                        ‪(814)503-0343
                      </p>
                      <button
                        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-envelope mt-5"
                        id="email"></button>
                      <p className="text " id="address">
                        m.bonnev10@gmail.com
                      </p>
                      <button
                        className="button is-block is-fullwidth is-outlined is-dark is-light fas fa-file mt-5"
                        id="resume"></button>
                      <a
                        className="text "
                        id="linkresume"
                        href="Resume-Matthew-Bonneville.pdf">
                        Resume
                      </a>
                    </div>
                  ) : null}
                  {/* <!-- end of contact page --> */}



                  {/* <!-- beginning of about page --> */}
                  {this.state.showAbout ? (
                    <div id="about1">
                      <figure className="is-fullwidth">
                        <img
                          id="img2"
                          src="./assets/portrait.jpg"
                          alt="Photograph of Matt Bonneville "
                        />
                        <button
                          className="button is-outlined is-dark is-light fas fa-paint-brush"
                          id="paint"></button>
                        <button
                          className="button is-outlined is-dark is-light fas fa-camera-retro"
                          id="camera"></button>
                      </figure>
                      <p className="description">
                        <strong>
                          {" "}
                          I'm Matt. Currently I'm attending a coding boot-camp
                          offered thru University of Arizona. I have a passion
                          for problem solving and learning, I'm from California
                          originally, but have lived in Arizona for most of my
                          life. I've worked in various customer service and
                          management positions. In my free time I drink tea,
                          cook, and ride my bike. Right now, I'm excited to
                          learn more about programming.
                        </strong>
                      </p>
                    </div>
                  ) : null}
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
