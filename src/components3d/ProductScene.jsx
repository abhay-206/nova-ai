import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import SceneLighting from "./SceneLighting";
import ParticleField from "./ParticleField";

function ProductCore() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.16;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.05;
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.15}
      floatIntensity={0.45}
    >
      <group ref={groupRef}>
        <RoundedBox
          args={[3.8, 2.35, 0.28]}
          radius={0.18}
          smoothness={6}
        >
          <meshPhysicalMaterial
            color="#0b1020"
            roughness={0.18}
            metalness={0.7}
            clearcoat={1}
            transparent
            opacity={0.96}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.17]}>
          <planeGeometry args={[3.4, 1.95]} />
          <meshBasicMaterial color="#080d1a" />
        </mesh>

        <mesh position={[-1.45, 0.73, 0.19]}>
          <planeGeometry args={[0.18, 0.18]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        <Text
          position={[-1.13, 0.74, 0.2]}
          fontSize={0.13}
          color="#ffffff"
          anchorX="left"
        >
          NOVA AI WORKSPACE
        </Text>

        <Text
          position={[-1.45, 0.25, 0.2]}
          fontSize={0.1}
          color="#64748b"
          anchorX="left"
        >
          PROJECT VELOCITY
        </Text>

        <Text
          position={[-1.45, -0.05, 0.2]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="left"
        >
          84%
        </Text>

        <mesh position={[-0.25, -0.03, 0.2]}>
          <planeGeometry args={[1.8, 0.07]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>

        <mesh position={[0.15, -0.03, 0.21]}>
          <planeGeometry args={[1.0, 0.07]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        <Text
          position={[-1.45, -0.53, 0.2]}
          fontSize={0.095}
          color="#94a3b8"
          anchorX="left"
        >
          AI has optimized 126 tasks
        </Text>

        <Text
          position={[-1.45, -0.78, 0.2]}
          fontSize={0.095}
          color="#38bdf8"
          anchorX="left"
        >
          +18.4% productivity
        </Text>
      </group>
    </Float>
  );
}

export default function ProductScene() {
  return (
    <div className="product-3d-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <perspectiveCamera
            makeDefault
            position={[0, 0, 6.8]}
            fov={40}
          />

          <SceneLighting intensity={0.9} />

          <ParticleField
            count={260}
            radius={5}
            color="#38bdf8"
          />

          <ProductCore />

          <Environment
            preset="city"
            environmentIntensity={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}