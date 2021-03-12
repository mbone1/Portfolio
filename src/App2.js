import './css.css'
import { useState, Suspense, useRef } from "react";
import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Laptop from './laptopweather.glb'
import Environment from './components/environment'
import Lights from './components/lights'






export default function App2() {

  const [view, setView] = useState()
  const [project, setProject] =useState(Laptop)

  // function
  function Spinny() {
    const group = useRef()
    const gltf = useLoader(GLTFLoader, project)
    useFrame(() => group.current.rotation.y += .02);
    return (
      <group ref={group}>
      {/* <group rotation={[0, 0, 0]}> */}
        <primitive object={gltf.scene} position={[0, -3, 0]} scale={[5,5,5]}/>
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
                  <div>Spingus tingus tongus, spong the crongus!</div>
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