import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <section class="container">
        <div class="columns is-multiline is-flex-mobile">
          <div class="column is-8 is-offset-2 register">
            <div class="columns">
              <div class="column left">
                <h2 class="title is-1">Matt Bonneville</h2>
                <button
                  class="button is-block is-outlined is-dark is-fullwidth is-light"
                  id="about">
                  about
                </button>
                <button
                  class="button is-block is-outlined is-dark is-fullwidth is-light"
                  id="portfolio">
                  portfolio
                </button>
                <button
                  class="button is-block is-outlined is-dark is-fullwidth is-light"
                  id="contact">
                  contact
                </button>
                <button
                  class="button is-block is-outlined is-dark is-fullwidth is-light fab fa-github"
                  id="github"></button>
                <button
                  class="button is-block is-outlined is-dark is-fullwidth is-light fab fa-linkedin-in"
                  id="linkedin"></button>
              </div>

              {/* <!-- beginning of portfolio page --> */}

              <div class="column right has-text-centered" id="rightPanel">
                <div id="portfolio1" class="is-hidden">
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light"
                    id="weather">
                    <strong>Weather Dashboard</strong>
                  </button>
                  <figure
                    class="image is-block is-fullwidth imgB is-hidden"
                    id="wdb">
                    {" "}
                    <img
                      id="img1"
                      src="screencap.PNG"
                      alt="Weather Dashboard"
                    />
                    <strong class="read">
                      A simple application using various APIs from OpenWeather.
                      The user enters a city and the app returns current weather
                      and a five day forecast.{" "}
                    </strong>
                    <a href="http://mbone1.github.io/legendary-barnacle/"></a>
                  </figure>
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light"
                    id="geo">
                    <strong>Easy Geo-Tracker</strong>
                  </button>
                  <figure
                    class="image is-block is-fullwidth imgB is-hidden"
                    id="egt">
                    {" "}
                    <img
                      id="img1"
                      src="screencap2.PNG"
                      alt="Easy Geo-Tracker"
                    />
                    <strong>
                      A group project, this application is built from various
                      API's. The user enters a city and satellite imagery, local
                      time, some statistics and a map of the area.{" "}
                    </strong>{" "}
                  </figure>
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light"
                    id="scheduler">
                    <strong>Work-Day Scheduler</strong>
                  </button>
                  <figure
                    class="image is-block is-fullwidth imgB is-hidden"
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

                {/* <!-- end of portfolio page -->
                        <!-- beginning of contact page --> */}

                <div id="contact1" class="is-hidden">
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light fas fa-phone mt-5"
                    id="phone"></button>
                  <p class="text is-hidden" id="number">
                    ‪(814)503-0343
                  </p>
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light fas fa-envelope mt-5"
                    id="email"></button>
                  <p class="text is-hidden" id="address">
                    m.bonnev10@gmail.com
                  </p>
                  <button
                    class="button is-block is-fullwidth is-outlined is-dark is-light fas fa-file mt-5"
                    id="resume"></button>
                  <a
                    class="text is-hidden"
                    id="linkresume"
                    href="Resume-Matthew-Bonneville.pdf">
                    Resume
                  </a>
                </div>
                {/* <!-- end of contact page --> */}
                {/* <!-- beginning of about page --> */}
                <div id="about1" class="is-hidden">
                  <figure class="is-fullwidth">
                    <img
                      id="img2"
                      src="portrait.jpg "
                      alt="Photograph of Matt Bonneville "
                    />
                    <button
                      class="button is-outlined is-dark is-light fas fa-paint-brush"
                      id="paint"></button>
                    <button
                      class="button is-outlined is-dark is-light fas fa-camera-retro"
                      id="camera"></button>
                  </figure>
                  <p class="description">
                    <strong>
                      {" "}
                      I'm Matt. Currently I'm attending a coding boot-camp
                      offered thru University of Arizona. I have a passion for
                      problem solving and learning, I'm from California
                      originally, but have lived in Arizona for most of my life.
                      I've worked in various customer service and management
                      positions. In my free time I drink tea, cook, and ride my
                      bike. Right now, I'm excited to learn more about
                      programming.
                    </strong>
                  </p>
                </div>
                {/* <!-- end of about page --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;