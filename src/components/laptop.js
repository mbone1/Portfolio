import { useState, Suspense } from "react";
// import Screencap from './assets/elyucateco.jpg'
// import ThreeScene from './components/cube2'
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import HeadModel from "./facefinal.glb";
import laptop from "./laptopweather.glb";
import Lights from "./lights";
import { useSpring, animated as a } from "react-spring/three";
import { animated, useSpring as uS } from "react-spring";
import * as THREE from "three/src/Three";

export default function Laptop() {

    const [active, setActive] = useState(false); //used to store animation state
    
    

    const { pos, ...props } = useSpring({
        position: active ? [0.4, 0, 1] : [-.10, 0, 0.75],
        scale: active ? [1.1, 1.1, 1.1] : [0.55, 0.55, 0.55],
        "material-opacity": active ? 0.9 : 0.2,
        rotation: active
            ?
            [0.1, -3.86, 3]
            : [0.2, 0.4, 0],
        config: {
            mass: 1500,
            tension: 9000,
            friction: 3000,
            precision: 0.00001,
        },
    });
   


    const { ...headProps } = useSpring({
        position: active ? [-.1, -0.13, -.5] : [0, -0.43, 0],
        scale: active ? [2, 2, 2] : [1, 1, 1],
        rotation: active
            ? // ? [THREE.Math.degToRad(1080), 0, THREE.Math.degToRad(45)]
            [0, -13.16, THREE.Math.degToRad(1)]
            : [0.2, 0.4, 0],
        config: {
            mass: 500,
            tension: 1000,
            friction: 1000,
            precision: 0.00001,
        },
    }); //used to animate the head spinning.
        
       


    function SpinningLaptop() {
        const gltf = useLoader(GLTFLoader, laptop);
        // function Spongus() {
        //   setActive(!active);
        //   }
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
            <a.mesh {...props}>
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
    function Box4() {
        return (
            <a.mesh {...props}>
                <boxBufferGeometry attach="geometry" args={[4.5, 4.5, 4.5]} />
                <meshStandardMaterial
                    color="lightblue"
                    attach="material"
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </a.mesh>
        );
    }
    function Box3() {
        return (
            <a.mesh {...props}>
                <boxBufferGeometry attach="geometry" args={[4.0, 4.0, 4.0]} />
                <meshStandardMaterial
                    color="white"
                    attach="material"
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </a.mesh>
        );
    }
    function Box2() {
        return (
            <a.mesh {...props}>
                <boxBufferGeometry attach="geometry" args={[4.25, 4.25, 4.25]} />
                {/* <boxBufferGeometry attach="geometry" args={[4.5, 4.5, 4.5]}/> */}
                <meshStandardMaterial
                    color="orange"
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
            <Canvas camera={{ position: [0, 0, 4] }}>
                {/* <Environment /> */}
                {/* <ambientLight color="lightblue" /> */}

                <Suspense fallback={<Box />}>
                    <Box />
                    <Box3 />
                    <Box2 />
                    <Box4 />
                    <SpinningLaptop />
                </Suspense>

                <Lights />
            </Canvas>
        </div>
    );
}