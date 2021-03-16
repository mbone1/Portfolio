import "./css.css";
import { useState, useRef, useEffect } from "react";
// import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Head from './facefinal.glb'
import Laptop from "./laptopweather.glb";
import Lights from "./components/lights";
import { useSpring, animated as a } from "react-spring/three";
import { animated, useSpring as uS } from "react-spring";
import * as THREE from "three/src/Three";
import Head from "./components/head";
import { withRouter } from "react-router";
//

export default function App2() {
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState();

  
  
  // const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;
  // const vwToPixel = (value) => `${(window.innerWidth * value) / 100}px`;
  // const [project, setProject] = useState(Head)

  // function

  // function Spinny() {
  //   const gltf = useLoader(GLTFLoader, Laptop)
  //   return (
  //     <group>
  //       <a.primitive onClick={e => setActive(!active)} object={gltf.scene}{...props}/>
  //     </group>
  //   );
  // }

  function About() {
    const colorChange = uS({
      reverse: about,
      reset: about,
      from: { color: "grey" },
      to: { color: "white" },
      config: { duration: 1000 },
      // onRest: () =>
      // { color: "white", from: { color: "grey" } }
    });

    return (
      <>
        {/* <button onClick={() => setAbout(!about)}>about</button> */}

        <animated.h1 style={colorChange} onClick={() => setAbout(!about)}>
          About
        </animated.h1>
      </>
    );
  }


  function useMeasure() {
    const ref = useRef();
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [ro] = useState(
      () => new ResizeObserver(([entry]) => set(entry.contentRect))
    );
    useEffect(() => {
      if (ref.current) ro.observe(ref.current);
      return () => ro.disconnect();
    }, []);
    return [{ ref }, bounds];
  }




  
  function AboutContent() {
    console.log(about)
    const [bind, {height: viewHeight, width: viewWidth}] = useMeasure()
    const { size, ...springProps } = uS({
      reverse: about,
      reset: about,
      size: about ? "0%" : "20%",
      opacity: about ? 0 : 1,
      config: { mass: 1, tension: 210, friction: 50 },
      // backgroundPosition: about ? "50% 0%" : "50% 100%",
      from: {
        size: "0%",
        opacity: 0,
        
      },
      to: {
        size: "100%",
        borderTop: "1px solid pink",
       

        // borderBottom: "1px solid white",
        opacity: 1
      }
    });
    
    // const style = uS({
    //   reverse: about,
    //   reset: about, 
    
      
    //   from: { height: 0, opacity: 0, transform: 'translate3d(0px,0,0)' },
    // to: { height: about ? viewHeight : 0, opacity: about ? 0 : 1, transform: `translate3d(${about ? 0 : 20}px,0,0)` },

    // });
    // const style2 = uS({
    //   reverse: about,
    //   reset: about, 
    //   from: { opacity: 0, marginTop: 0, height: 0, display: "hidden"  },
    //   to: { opacity: 1, marginTop: -00, height: 'auto', display: "", borderTop: "1px solid white" },
    //   config: { duration: 1000, mass: 2000, tension: 200, friction: 12 }

    //   // height: about ? "100vh" : "0vw"
    // });

    return (
      <>
        <animated.div  style={{ height: size, width: size, ...springProps }}>
          <Head />
          {/* <animated.div className="i"> */}
          <div style={{ height: "100%", width: "100%" }}>
            <h4>Spingus</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              sint vero minus, nam eum ex temporibus ea sequi aspernatur,
              molestiae reiciendis dignissimos. 
            </span>
            <h4>Spingus</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              sint vero minus, nam eum ex temporibus ea sequi aspernatur,
              molestiae reiciendis dignissimos. 
            </span>
          </div>
          {/* </animated.div> */}
        </animated.div>

        
          <animated.h1>Portfolio</animated.h1>
          {/* <div className="mt-5">
              
          </div> */}
       
      </>
    );
}

      


  return (
    <>
      {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}> */}
      <div className="container">
        {/* about section */}
        <div className="row">
          <h1>Matt Bonneville</h1>
            </div>
         
        <div className="row">
          <div>
            <About />
            <AboutContent />
           
          </div>
        </div>

        {/* portfolio section */}

      </div>
    </>
              )
  
;
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
