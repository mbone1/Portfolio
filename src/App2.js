import './css.css'
import { useState, Suspense } from "react";
// import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Head from './facefinal.glb'
import Laptop from './laptopweather.glb'
import Lights from './components/lights'
import { useSpring, animated as a } from 'react-spring/three'
import { animated, useSpring as uS } from 'react-spring'
import * as THREE from "three/src/Three";
import Head from './components/head'
// 






export default function App2() {

  const [about, setAbout] = useState()
  const [portfolio, setPortfolio] = useState()
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
    
    const  fart  = uS({
      reverse: !about,
      reset: !about,
      from: {  color: "grey" },
      to: { color: "white" },
      config: { duration: 1000 },
      // onRest: () => 
      // { color: "white", from: { color: "grey" } }
    });
  
    return (
      <>
        {/* <button onClick={() => setAbout(!about)}>about</button> */}
  
          <animated.h1 style={fart} onClick={() => setAbout(!about)}>
            About
          </animated.h1>
      
      </>
    );
      }


       


      return (
      <>
        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}> */}
        <div className="container">
          {/* about section */}
          <div className="row">
              <div>
                <About/>
                
                <div className={about ? "" : "d-none"}>
              <Head/>
                  <div className="i">
                    <h4>Spingus</h4>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima sint vero minus, nam eum ex temporibus ea sequi
                      aspernatur, molestiae reiciendis dignissimos. Voluptatem
                      facere sunt nam beatae dignissimos laborum voluptate.
                    </span>
                  </div>
                </div>
            
            </div>
          </div>

          {/* portfolio section */}
          <div className="row">
            {/* <div className="mt-5">
              <h2>Portfolio</h2>
              {portfolio ? (
                <div style={{ height: "500px" }}>
                  <Canvas camera={{ position: [0, 0, 10] }}>
                    <Suspense fallback={<Box />}>{<Spinny />}</Suspense>
                    <Lights />
                  </Canvas>
                  <div className="i">
                    <h4>Technologies</h4>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima sint vero minus, nam eum ex temporibus ea sequi
                      aspernatur, molestiae reiciendis dignissimos. Voluptatem
                      facere sunt nam beatae dignissimos laborum voluptate.
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div> */}
          </div>
        </div>
        {/* </div> */}
      </>
    );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
