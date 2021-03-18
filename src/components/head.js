import { useState, Suspense} from "react";
import { Canvas, useLoader} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import HeadModel from "./facefinal.glb";
import Lights from "./lights";
import { useSpring, animated as a} from "react-spring/three";
import * as THREE from "three/src/Three";
import { useProgress, Html } from "@react-three/drei";



export default function Head() {
    const [active, setActive] = useState(false); //used to store animation state
    const [hover, setHover] = useState(false);

    function Loader() {
      const { progress } = useProgress();

      return (
        <Html center>
          <h1>{Math.trunc(progress)} % loaded</h1>
        </Html>
      );
    }

    function Logger(burrito) {
        setHover(burrito)
        console.log(hover)
    }

    const { pos, ...props } = useSpring({
        position: hover ? [0.4, 0, 1] : [-.10, 0, 0.75],
        scale: hover ?  [1.1, 1.1, 1.1] : [0.55, 0.55, 0.55] ,
        "material-opacity": hover ? 0.9 : 0.2,
        rotation: hover
        ? 
         [0.1, -3.86, 3]
        :  [0.2, 0.4, 0],
      config: {
        mass: 1500,
        tension: 9000,
        friction: 3000,
        precision: 0.00001,
      },
    });

    const { ...headProps } = useSpring({
      position: hover ? [-0.1, -0.13, -0.5] : [0, -0.43, 0],
      scale: hover ? [2, 2, 2] : [1, 1, 1],
      rotation: hover
         ?  [0, -13.16, THREE.Math.degToRad(1)]
             : [0.2, 0.4, 0],
          // scale: hover ? [1.3, 1.3, 1.3] : [1, 1, 1],
          // rotation: active
          //   ?
          //    [0, -13.16, THREE.Math.degToRad(1)]
          //    : [0.2, 0.4, 0],
          config
        : {
            mass: 500,
            tension: 1000,
            friction: 1000,
            precision: 0.00001,
          },
    }); //used to animate the head spinning.

    function SpinningHead() {
      const gltf = useLoader(GLTFLoader, HeadModel);
      // function Spongus() {
      //   setActive(!active);
      //   }
        return (
          <group>
              <a.primitive
              onPointerOver={e => Logger(true)}
              onPointerOut={e=> Logger(false)}
              onClick={(e) => setActive(!active)}
              object={gltf.scene}
              attach="geometry"
              args={[2, 2, 2]}
              {...headProps}
                />
                {/* <span>asdf</span> */}
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

      return (
          <div style={{ height: "400px" }}>
            <button onClick={()=>setActive(!active)}>spin</button>
          <Canvas camera={{ position: [0, 0, 4] }}>
            <Suspense fallback={<Loader />}>
              <Box />
              <Box3 />
              <Box2 />
              <Box4 />
              <SpinningHead />
            </Suspense>
            <Lights />
          </Canvas>
        </div>
      );    
  }
        

    

    
    
    
  
  
  
       



          
          


    

