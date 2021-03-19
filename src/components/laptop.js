import { useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lights from "./lights";
import { useSpring, animated as a } from "react-spring/three";
import * as THREE from "three/src/Three";
import { useProgress, Html } from '@react-three/drei'
import projects from "../assets/projects";



export default function Laptop() {
    const [active, setActive] = useState(false); //used to store animation state
    const [currentModel, setCurrentModel] = useState(projects[0].model)
    let [currentInfo, setCurrentInfo] = useState(projects[0])

    function modelChange(proj) {
        setActive(!active)
        setCurrentModel(proj.model)
        setCurrentInfo(proj)
    }
    
    function Loader() {
    const { progress } = useProgress();
        return <Html center><h1>{Math.trunc(progress)} % loaded</h1></Html>;
    }
        
    const { ...headProps } = useSpring({
      position: [-0.05, -0.53, -0.1],
      scale: active ? [1.7, 1.7, 1.7] : [1.7, 1.7, 1.7],
      rotation: active ? [0.3, -14.16, 5.5] : [0.3, THREE.Math.degToRad(270), 5.5],
      config: {
        mass: 10,
        tension: 5000,
        friction: 1000,
        precision: 0.00001,
      },
    }); //used to animate the head spinning.

    const { hover } = useSpring({
        scale: [1.8, 1.8, 1.8]
    })
        
    function SpinningLaptop() {
        const gltf = useLoader(GLTFLoader, currentModel);
        return (
            <group>
                <a.primitive
                    onClick={(e) => setActive(!active)}
                    object={gltf.scene}
                    onPointerOver={hover}
                    attach="geometry"
                    args={[2, 2, 2]}
                    {...headProps}
                />
            </group>
        );
    }
               

  const openInNewTab = (url) => {
    const newWindow = window.open(
      url,
      "_blank",
      "noopener,noreferrer,fullscreen=no"
    );
    if (newWindow) newWindow.opener = null;
  };

    return (
      <div style={{ height: "400px" }}>
        {projects.map((project) => (
        
            <button
              key={project.key.toString()}
              onClick={() => modelChange(project)}>{project.name}</button>
          
        ))}

        <Canvas camera={{ position: [0, 0, 4] }}>
          <Suspense fallback={<Loader />}>
            <SpinningLaptop />
          </Suspense>
          <Lights />
          <Html></Html>
        </Canvas>
        <h3 style={{ color: "lightgreen" }} key={currentInfo.key}>
          {currentInfo.name}
        </h3>
        <h4 style={{ color: "pink" }}>Description:</h4>
        <span key={currentInfo.description}>{currentInfo.description}</span>
        <h4 style={{ color: "pink" }}>Technologies:</h4>
        <span key={currentInfo.technologies}>{currentInfo.technologies}</span>
        <h4 style={{ color: "lightblue" }}>Links</h4>
        <button
          key={currentInfo.url}
          onClick={() => openInNewTab(currentInfo.url)}>
          Github Repo
        </button>
        <button
          key={currentInfo.deployedUrl}
          onClick={() => openInNewTab(currentInfo.deployedUrl)}>
          Deployed Application
        </button>
        <br></br>
      </div>
    );
}

        



       



          
          

   

              

                   

        