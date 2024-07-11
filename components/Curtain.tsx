'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const CurtainComponent: React.FC = () => {
  const curtainLeft = useRef<THREE.Mesh>(null!);
  const curtainRight = useRef<THREE.Mesh>(null!);
  const speed = 0.05;

  useFrame(() => {
    if (curtainLeft.current.position.x > -5) {
      curtainLeft.current.position.x -= speed;
      curtainRight.current.position.x += speed;
    }
  });

  return (
    <>
      <Plane ref={curtainLeft} position={[-1, 0, 0]} args={[5, 10]}>
        <meshStandardMaterial color="red" />
      </Plane>
      <Plane ref={curtainRight} position={[1, 0, 0]} args={[5, 10]}>
        <meshStandardMaterial color="red" />
      </Plane>
    </>
  );
};

const Curtain: React.FC = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-50">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CurtainComponent />
    </Canvas>
  );
};

export default Curtain;
