import {
  Float,
  RoundedBox,
  Text,
  Line,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Bar({ x, height, color = "#8b5cf6" }) {
  return (
    <mesh position={[x, height / 2 - 0.45, 0.05]}>
      <boxGeometry args={[0.16, height, 0.08]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.25}
        roughness={0.25}
      />
    </mesh>
  );
}

function DashboardPanel() {
  return (
    <group>
      <RoundedBox
        args={[5.8, 3.5, 0.18]}
        radius={0.18}
        smoothness={6}
      >
        <meshPhysicalMaterial
          color="#0b1020"
          roughness={0.22}
          metalness={0.62}
          clearcoat={0.9}
          transparent
          opacity={0.96}
        />
      </RoundedBox>

      <mesh position={[0, 1.48, 0.11]}>
        <planeGeometry args={[5.45, 0.025]} />
        <meshBasicMaterial color="#334155" />
      </mesh>

      <Text
        position={[-2.55, 1.62, 0.14]}
        fontSize={0.19}
        color="#ffffff"
        anchorX="left"
      >
        NOVA WORKSPACE
      </Text>

      <Text
        position={[1.8, 1.62, 0.14]}
        fontSize={0.12}
        color="#64748b"
        anchorX="left"
      >
        LIVE
      </Text>

      <Text
        position={[-2.55, 0.92, 0.14]}
        fontSize={0.13}
        color="#94a3b8"
        anchorX="left"
      >
        PROJECT HEALTH
      </Text>

      <Text
        position={[-2.55, 0.55, 0.14]}
        fontSize={0.42}
        color="#ffffff"
        anchorX="left"
      >
        98.4%
      </Text>

      <Text
        position={[-2.55, 0.18, 0.14]}
        fontSize={0.11}
        color="#22c55e"
        anchorX="left"
      >
        +12.8% this month
      </Text>

      <group position={[0.25, 0.1, 0.12]}>
        <Bar x={-0.9} height={0.55} />
        <Bar x={-0.6} height={0.85} color="#6366f1" />
        <Bar x={-0.3} height={0.72} />
        <Bar x={0} height={1.12} color="#38bdf8" />
        <Bar x={0.3} height={0.95} color="#6366f1" />
        <Bar x={0.6} height={1.35} />
        <Bar x={0.9} height={1.12} color="#38bdf8" />

        <Line
          points={[
            [-1, 0.35, 0.13],
            [-0.7, 0.52, 0.13],
            [-0.4, 0.42, 0.13],
            [-0.1, 0.74, 0.13],
            [0.2, 0.63, 0.13],
            [0.5, 0.98, 0.13],
            [0.8, 0.82, 0.13],
            [1.05, 1.18, 0.13],
          ]}
          color="#38bdf8"
          lineWidth={1.5}
        />
      </group>

      <mesh position={[1.98, -0.98, 0.13]}>
        <planeGeometry args={[0.7, 0.28]} />
        <meshBasicMaterial
          color="#162033"
          transparent
          opacity={0.9}
        />
      </mesh>

      <Text
        position={[1.98, -0.98, 0.15]}
        fontSize={0.095}
        color="#a5b4fc"
        anchorX="center"
        anchorY="middle"
      >
        AI ACTIVE
      </Text>
    </group>
  );
}

export default function Dashboard3D({
  position = [0, 0, 0],
  rotation = [-0.08, 0.12, -0.02],
  scale = 1,
}) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      rotation[1] +
      Math.sin(state.clock.elapsedTime * 0.35) * 0.035;
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.12}
      floatIntensity={0.35}
    >
      <group
        ref={groupRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <DashboardPanel />
      </group>
    </Float>
  );
}