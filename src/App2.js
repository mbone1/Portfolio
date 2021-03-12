import './css.css'
import { useState } from "react";
import Screencap from './assets/elyucateco.jpg'



export default function App2() {
    const [view, setView] = useState()
    return (
      <>
        <div class="container">

          {/* about section */}
          <div class="row">
            <div class="col-md">
              <h2>About</h2>
              <button onClick={() => setView("about")}></button>
              {view === "about" ? (
                <div>
                  <img src={Screencap} className="i" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* portfolio section */}
          <div class="row">
            <div class="col-md">
              <h2>Portfolio</h2>
              <button onClick={() => setView("portfolio")}></button>
              {view === "portfolio" ? (
                <div>
                  <img src={Screencap} className="i" />
                  <button onClick={() => setView("")}></button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* contact section */}
          <div class="row">
            <div class="col-md">
              <h2>Contact</h2>
              <button onClick={() => setView("contact")}></button>
              {view === "contact" ? (
                <div>
                  <img src={Screencap} className="i" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    );
}