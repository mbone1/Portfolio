import React, { Component } from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Scene } from "three";
// import '../../api/3d/laptop'
import laptop from './laptopweather.glb';


// for tomorrow...  start work on importing to front end with tut on react-three-fiber
class ThreeScene extends Component {
  componentDidMount = () => {
    this.loader = new GLTFLoader();
    this.scene = new THREE.Scene();

    this.loader.load(
      // "../../api/3d/laptopweather.glb",
      // "./laptopweather.glb",
      // "./laptopweather.glb",
      laptop,
      function (gltf) {
        // this.gltf = gltf.scene
        this.scene.add(gltf.scene);
        // console.log(this.gltf);
      },
      function (xhr) {
        console.log((xhr.loaded + xhr.total) * 100 + "%loaded");
      },
      function (error) {
        console.log(error);
      }
    );

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#999199");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 8;
    this.camera.position.y = 5;
    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    // this.scene.add(lights[0]);
    // this.scene.add(lights[1]);
    // this.scene.add(lights[2]);
    //ADD Your 3D Models here

    this.renderScene();
    //start animation
    this.start();
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    //Animate Models Here
    //ReDraw Scene with Camera and Scene Object
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  
  // updateSetState = () => {
  //   if (this.gltf !== undefined) {
  //     console.log("spongus")
  //   }
  // };
      

  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: "300px", height: "300px" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
