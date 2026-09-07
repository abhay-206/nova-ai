import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import SceneLighting from "./SceneLighting";
import FloatingOrb from "./FloatingOrb";
import FloatingCard from "./FloatingCard";
import ParticleField from "./ParticleField";
import Dashboard3D from "./Dashboard3D";

function HeroObjects() {
  return (
    <>
      <SceneLighting intensity={0.85} />

      <ParticleField
        count={500}
        radius={7}
        color="#7c3aed"
      />

      <FloatingOrb
        position={[3.5, 1.9, -0.8]}
        size={0.7}
        color="#7c3aed"
        speed={0.8}
        distort={0.28}
      />

      <FloatingOrb
        position={[-3.6, -1.6, -1]}
        size={0.42}
        color="#38bdf8"
        speed={1.1}
        distort={0.22}
      />

      <FloatingOrb
        position={[4.2, -1.9, -0.5]}
        size={0.28}
        color="#a855f7"
        speed={1.4}
        distort={0.18}
      />

      <FloatingCard
        position={[-3.15, 1.55, 0]}
        rotation={[0.02, 0.1, -0.08]}
        width={2.05}
        height={1.18}
        title="AI AUTOMATION"
        value="2.5M+"
        accent="#38bdf8"
      />

      <FloatingCard
        position={[3.25, -0.35, 0.25]}
        rotation={[-0.02, -0.08, 0.07]}
        width={1.9}
        height={1.08}
        title="TEAM OUTPUT"
        value="+40%"
        accent="#8b5cf6"
      />

      <Dashboard3D
        position={[0, -0.15, -1.25]}
        rotation={[-0.08, 0.12, -0.02]}
        scale={0.82}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-3d-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 8]}
            fov={42}
          />

          <HeroObjects />

          <Environment preset="city" environmentIntensity={0.32} />
        </Suspense>
      </Canvas>
    </div>
  );
}