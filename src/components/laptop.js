import { useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import laptop from "./laptopweather.glb";
import Lights from "./lights";
import { useSpring, animated as a } from "react-spring/three";
import * as THREE from "three/src/Three";
import laptop2 from './laptopgeotracker.glb'
import laptop3 from './laptopworkdayscheduler.glb'

export default function Laptop() {
    const [active, setActive] = useState(false); //used to store animation state
    const [currentModel, setCurrentModel] = useState(laptop)
    function modelChange(model) {
        setActive(!active)
        setCurrentModel(model)
    }

    const { ...headProps } = useSpring({
      position: [-0.05, -0.53, -0.1],
      scale: active ? [1.7, 1.7, 1.7] : [1.7, 1.7, 1.7],
      rotation: active
        ? // ? [THREE.Math.degToRad(1080), 0, THREE.Math.degToRad(45)]
          [0.3, -14.16, 5.5]
        : [0.3, THREE.Math.degToRad(270), 5.5],
      config: {
        mass: 10,
        tension: 5000,
        friction: 1000,
        precision: 0.00001,
      },
    }); //used to animate the head spinning.
        
    function SpinningLaptop() {
        const gltf = useLoader(GLTFLoader, currentModel);
        return (
            <group>
                <a.primitive
                    onClick={(e) => setActive(!active)}
                    object={gltf.scene}
                    attach="geometry"
                    args={[2, 2, 2]}
                    {...headProps}
                />
            </group>
        );
    }
   
    function Box() {
        return (
            <a.mesh>
                <boxBufferGeometry attach="geometry" args={[3.75, 3.75, 3.75]} />
                <meshStandardMaterial
                    color="hotpink"
                    attach="material"
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </a.mesh>
        );
    }

    return (
        <div style={{ height: "400px" }}>
            <button onClick={()=> modelChange(laptop)}>lplan</button>
            <button onClick={()=> modelChange(laptop2)}>geotracker</button>
            <button onClick={()=> modelChange(laptop3)}>workdayscheduler</button>
            <Canvas camera={{ position: [0, 0, 4] }}>
                <Suspense fallback={<Box />}>
                    <SpinningLaptop />
                </Suspense>
                <Lights />
            </Canvas>
            <br></br>
        </div>
        );
}

       



          
          

   

              

                   

        