import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App2 from './App2'
import * as serviceWorker from './serviceWorker';






ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
  );
 


serviceWorker.unregister();



// import ReactDOM from "react-dom";
// import * as THREE from "three/src/Three";
// // import {lineMaterial} from 'three/examples/js/lines/LineMaterial'
// import {React, Suspense} from "react";
// import { Canvas } from "react-three-fiber";
// import { useSpring, animated as a } from "react-spring/three";

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial transparent opacity={0.5} />
//     </mesh>
//   );
// }
// function Lines() {
  
//   const vertices = [
//     [-1, 0, 0],
//     [0, 1, 0],
//     [1, 0, 0],
//     [0, -1, 0],
//     [-1, 0, 0],
//   ];
//   const { factor } = useSpring({
//     config: { mass: 5, tension: 500, friction: 40 },
//     from: { factor: 0 },
//     to: async (next) => {
//       while (true) {
//         await next({ factor: 1 });
//         await next({ factor: 0.5 });
//       }
//     },
//   });
//   return (
//     <line>
//       <a.geometry
//         name="geometry"
//         vertices={factor.interpolate((f) =>
//           vertices.map((v) => new THREE.Vector3(...v).multiplyScalar(f))
//         )}
//         onUpdate={(self) => (self.verticesNeedUpdate = true)}
//       />
//       <lineMaterial name="material" color="white" />
//     </line>
//   );
// }

// ReactDOM.render(
//   <Canvas>
//     <Suspense fallback={<Box />}>
//       <Lines />
//     </Suspense>
//   </Canvas>,
//   document.getElementById("root")
// );
