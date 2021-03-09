import React, { Component, useEffect, useRef } from "react";
import * as THREE from "three";
import Backsplash from '../assets/backsplash.jpg'
import projects from "../assets/projects.js";

export default function ThreeJS () {
  const { useRef, useEffect, useState } = React;
  const mount = useRef(null);
  const [isAnimating, setAnimating] = useState(true);
  const controls = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor("#000000");
    renderer.setSize(width, height);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
      mount.current.removeChild(renderer.domElement);

      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      controls.current.start();
    } else {
      controls.current.stop();
    }
  }, [isAnimating]);

  return (
    <div
      className="vis"
      ref={mount}
      onClick={() => setAnimating(!isAnimating)}
    />
  );
};










// let count = 2
// function handleClick() {
//     count++
//     console.log(count)
//   return count = count++
// }


// export default function ThreeJS() {
//     const mount = useRef(null)

//     useEffect(() => {
//         var scene = new THREE.Scene();
//         scene.background = new THREE.Color(0x9885527);
//         var camera = new THREE.PerspectiveCamera(
//           55,
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000
//         );
//         var renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth / 2, window.innerHeight / 3);
//         mount.appendChild(renderer.domElement);
//         const texture = new THREE.TextureLoader().load(
//           projects[count].screenshot
//         );
//         var material = new THREE.MeshBasicMaterial({
//           map: texture,
//           overdraw: 0.1,
//         });
//         var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//         var cube = new THREE.Mesh(geometry, material);
//         const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
//         // directionalLight.position()

//         scene.add(cube);
//         scene.add(directionalLight);
//         camera.position.z = 3;
//         camera.position.z = 1.8;
//         var animate = function () {
//           requestAnimationFrame(animate);
//           cube.rotation.x += 0.0;
//           cube.rotation.y += 0.005;
//           renderer.render(scene, camera);
//         };
//         animate();
//     })
//     return (
//       <>
//         <div class="info">Look at dee earf</div>
//         <div ref={(ref) => (mount = ref)} />
//         <button onClick={() => handleClick()}>asdf</button>
//       </>
//     );
// }





// class ThreeJS extends Component {

//   componentDidMount() {
//       var scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x9885527);
//     var camera = new THREE.PerspectiveCamera(
//       55,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth/2, window.innerHeight/3);
//     this.mount.appendChild(renderer.domElement);
//     const texture = new THREE.TextureLoader().load(
//       projects[count].screenshot
//     );
//     var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.1 });
//     var geometry = new THREE.BoxGeometry(.5, .5, .5);
//     var cube = new THREE.Mesh(geometry, material);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
//     // directionalLight.position()

//     scene.add(cube);
//     scene.add(directionalLight);
//     camera.position.z = 3;
//     camera.position.z = 1.8;
//     var animate = function () {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.0;
//       cube.rotation.y += 0.005;
//       renderer.render(scene, camera);
//     };
//     animate();
//   }
//   render() {
//     return (
//       <>
//         <div class="info">Look at dee earf</div>
//             <div ref={(ref) => (this.mount = ref)} />
//             <button
//                 onClick={() => handleClick()}>asdf</button>
//       </>
//     );
//   }
// }

// export default ThreeJS;
