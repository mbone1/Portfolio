import './css.css'
import { useState, Suspense, useRef } from "react";
import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Laptop from './facefinal.glb'
import Lights from './components/lights'
import { useSpring, animated } from 'react-spring/three'
import * as THREE from "three";






export default function App2() {

  const [view, setView] = useState()
  const [project, setProject] = useState(Laptop)
  const [active, setActive] = useState()
  const { pos, ...props } = useSpring({
    pos: active ? [0, -2, 2] : [0, -2, 2],
    scale: active ? [3, 3, 3] : [4, 4, 4],
    rotation: active
      // ? [THREE.Math.degToRad(1080), 0, THREE.Math.degToRad(45)]
      ? [0, -.1, 0]
      : [0, -.5, THREE.Math.degToRad(1080)],
    config: { mass: 100, tension: 1000, friction: 300, precision: 0.00001 },
  });

  // function
  function Spinny() {
    // const group = useRef()
    const gltf = useLoader(GLTFLoader, project)
    return (
      <group>
      {/* <group rotation={[0, 0, 0]}> */}
        <animated.primitive onClick={e => setActive(!active)} object={gltf.scene}{...props}/>
      {/* </group> */}
      </group>
    );
    
  }

  function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
    )
  }


  


    return (
      <>
        <div className="container">

          {/* about section */}
          <div className="row">
            <div className="col-md">
              <h2>About</h2>
              <button onClick={() => setView("about")}></button>
              {view === "about" ? (
                <div>
                  
                  <Canvas camera={{ position: [0, 0, 10]}}>
                    {/* <Environment /> */}
                   <Suspense fallback={<Box/>}>{<Spinny />}</Suspense>
                  <Lights/>
                    </Canvas>
                   
                  <div className="i">
                  <h4>Technologies</h4>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint vero minus, nam eum ex temporibus ea sequi aspernatur, molestiae reiciendis dignissimos. Voluptatem facere sunt nam beatae dignissimos laborum voluptate.</span>
                  <h4>Description</h4>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt voluptatum corrupti reiciendis deserunt? Natus sequi, nemo ipsa aspernatur officia ea veritatis perspiciatis dolorem blanditiis eos tempore facere. Vero, rerum?</span>
                  <h4>Links</h4>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt voluptatum corrupti reiciendis deserunt? Natus sequi, nemo ipsa aspernatur officia ea veritatis perspiciatis dolorem blanditiis eos tempore facere. Vero, rerum?</span>
                
                  </div>
                  </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* portfolio section */}
          <div className="row">
            <div className="col-md">
              <h2>Portfolio</h2>
              <button onClick={() => setView("portfolio")}></button>
              {view === "portfolio" ? (
                <div>
                  <img src={Screencap} classNameName="i" />
                  <button onClick={() => setView("")}></button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* contact section */}
          <div className="row">
            <div className="col-md">
              <h2>Contact</h2>
              <button onClick={() => setView("contact")}></button>
              {view === "contact" ? (
                <div>
                  <img src={Screencap} classNameName="i" />
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


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);