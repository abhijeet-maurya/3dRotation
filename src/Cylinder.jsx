import React, { useRef } from "react";
import { CameraControls, useScroll, useTexture, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Cylinder = () => {

  // to rotate the model
  let tex = useTexture("./combine.png");
  let cyl =useRef(null);
  useFrame((state,delta)=>{
    cyl.current.rotation.y +=delta;
  });

  // for on scroll zoom in
  let data = useScroll();
  let pos = useRef(null);
  useFrame((state, delta) => {
    if (pos.current) {
      pos.current.position.set(0,-data.offset*0.5, data.offset * 3.5);
    }
  });
    // model configration or styling
  return (
    <OrthographicCamera ref={pos} >
    <group rotation={[0,0.8,0.5]} position={[0,0.1,0.3]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2.2, 2.4, 60, 60, true]} />
        <meshStandardMaterial map={tex} metalness={0.2} emissiveIntensity={50} roughness={50} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
    </OrthographicCamera>
  );
};

export default Cylinder;
