"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// A skyline of towers; camera glides with mouse and scroll.
function City() {
  const group = useRef<THREE.Group>(null!);
  const towers = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    x: ((i % 10) - 4.5) * 1.6 + Math.sin(i) * 0.3,
    z: -Math.floor(i / 10) * 1.8,
    h: 0.8 + Math.abs(Math.sin(i * 12.9898)) * 3.6,
  })), []);
  useFrame(({ camera, pointer }) => {
    const s = Math.min(scrollY / innerHeight, 1.5);
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (2.2 + s * 3 + pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.position.z += (7 - s * 4 - camera.position.z) * 0.04;
    camera.lookAt(0, 1.2, -4);
    group.current.rotation.y = Math.sin(performance.now() / 6000) * 0.05;
  });
  return (
    <group ref={group}>
      {towers.map((t, i) => (
        <mesh key={i} position={[t.x, t.h / 2, t.z]}>
          <boxGeometry args={[1, t.h, 1]} />
          <meshStandardMaterial color={i % 5 === 0 ? "#f3b45a" : i % 2 ? "#16306f" : "#2b2d33"} metalness={0.6} roughness={0.35} emissive={i % 5 === 0 ? "#6b4a14" : "#000"} />
        </mesh>
      ))}
      <mesh rotation-x={-Math.PI / 2}><planeGeometry args={[60, 60]} /><meshStandardMaterial color="#0a0f1f" /></mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas className="scene" dpr={[1, 1.5]} camera={{ position: [0, 2.2, 7], fov: 50 }} aria-hidden>
      <fog attach="fog" args={["#2a2350", 6, 18]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 4]} intensity={2} color="#ffb98a" />
      <City />
    </Canvas>
  );
}
