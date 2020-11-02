import React from "react";
import projects from "../assets/projects.js";
import { useSpring, animated } from "react-spring";


export default function Portfolio() {
const fadeIn = useSpring({
  opacity: 1,
  from: { opacity: 0 },
});


  return (
    <div>
      {projects.map((project) => (
        <>
          <strong className="read">
            <animated.p style={fadeIn} >{project.name}</animated.p>
            <animated.a style={fadeIn} href={project.url}>
              Github Link
            </animated.a>
            <br></br>
            <animated.a style={fadeIn} href={project.deployedUrl}>
              Deployed Application
            </animated.a>
          </strong>
        </>
      ))}
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
      <p>asdfa</p>
    </div>
  );
}

/* //old portfolio */

/* <button
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
                          OpenWeather. The user enters a city and the app
                          returns current weather and a five day forecast.{" "}
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
                          A group project, this application is built from
                          various API's. The user enters a city and satellite
                          imagery, local time, some statistics and a map of the
                          area.{" "}
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
                          A simple to-do list/calendar application, user enters
                          a task which is saved in local storage and available
                          upon refreshing the page.
                        </strong>{" "}
                     </figure> */
