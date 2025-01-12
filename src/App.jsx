import { CameraControls, Environment, OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "./style.css";
import Cylinder from "./Cylinder";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="absolute top-5 z-20 flex inline gap-3 left-7 drop-shadow-glow text-white text-5xl font typography">
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.16V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.43-22.12-22.21Q120-294 120-310v-340q0-16 7.88-29.79Q135.75-693.57 150-702l300-173q14.33-8 30.16-8 15.84 0 29.84 8l300 173q14.25 8.43 22.13 22.21Q840-666 840-650v340q0 16-7.87 29.79Q824.25-266.43 810-258L510-85q-14.33 8-30.16 8Q464-77 450-85L150-258Zm330-222Z"/></svg>
        <h1 className="top-10 "> Three.Js</h1>
      </div>
      <Canvas className="z-10">
        {/* <OrbitControls /> */}
        <Environment
          files={
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_08_4k.hdr"
          }
        />
        <ScrollControls pages={2}>
          <Cylinder />
        </ScrollControls>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            height={100}
            mipmapBlur={0.05}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
      <div className="absolute z-20 bottom-10 right-2 w-1/4 font-[Monospace] text-sm float-right">
        <h3 className="text-xl text-white">3D Rotation Banner.</h3>
        <p className="italic text-white text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum soluta omnis cum   sit iusto voluptatibus in, culpa iure.</p>
      </div>
    </div>
  );
};

export default App;
