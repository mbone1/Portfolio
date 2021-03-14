import './css.css'
import { useState, Suspense } from "react";
// import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Head from './facefinal.glb'
import Laptop from './laptopweather.glb'
import Lights from './components/lights'
import { useSpring, animated } from 'react-spring/three'
// import * as THREE from "three";






export default function App2() {

  const [about, setAbout] = useState()
  const [portfolio, setPortfolio] = useState()
  // const [project, setProject] = useState(Head)
  const [active, setActive] = useState()
  // const vertices = [
  //   [-1, 0, 0],
  //   [0, 1, 0],
  //   [1, 0, 0],
  //   [0, -1, 0],
  //   [-1, 0, 0],
  // ];
  const { color, pos, ...props } = useSpring({
    color: active ? "hotpink" : "white",
    pos: active ? [0, -2, 2] : [0, -2, 2],
    scale: active ? [2.5, 2.5, 2.5] : [3.5, 3.5, 3.5],
    // "material-opacity": active ? 0.6 : 0.25,

    rotation: active
      ? // ? [THREE.Math.degToRad(1080), 0, THREE.Math.degToRad(45)]
        [0.2, 0.4, 0]
      : [0.1, -6.86, 0],
    config: { mass: 500, tension: 1000, friction: 1000, precision: 0.00001 },
  });

  // function
  function SpinningHead() {
    const gltf = useLoader(GLTFLoader, Head)
    return (
      <group>
        {/* <animated.line position={pos}>
          <geometry
            attach="geometry"
            vertices={vertices.map((v) => new THREE.Vector3(...v))}
          />
          <animated.lineBasicMaterial attach="material" color={color} />
        </animated.line> */}

        <animated.primitive
          onClick={(e) => setActive(!active)}
          object={gltf.scene}
          {...props}
        />
      </group>
    );
  }

  function Spinny() {
    const gltf = useLoader(GLTFLoader, Laptop)
    return (
      <group>
        <animated.primitive onClick={e => setActive(!active)} object={gltf.scene}{...props}/>
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
        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}> */}
          <div className="container">
            {/* about section */}
            <div className="row">
              <div>
                <h2>About</h2>
                <button onClick={() => setAbout(!about)}></button>
              {about ? (
                <>
                  <div style={{ height: "400px" }}>
                    <Canvas camera={{ position: [0, 0, 9] }}>
                      {/* <Environment /> */}
                      <Suspense fallback={<Box />}>{<SpinningHead />}</Suspense>
                      <Lights />
                    </Canvas>

                  </div>
                    <div className="i">
                      <h4>Spingus</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima sint vero minus, nam eum ex temporibus ea sequi
                        aspernatur, molestiae reiciendis dignissimos. Voluptatem
                        facere sunt nam beatae dignissimos laborum voluptate.
                      </span>
                  </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* portfolio section */}
            <div className="row">
              <div className="mt-5">
                <h2>Portfolio</h2>
                <button onClick={() => setPortfolio(!portfolio)}></button>
                {portfolio ? (
                  <div style={{ height: "500px" }}>
                      <Canvas camera={{ position: [0, 0, 10] }}>
                        {/* <Environment /> */}
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
              </div>
            </div>
          </div>
        {/* </div> */}
      </>
    );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);