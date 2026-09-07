import { Float, RoundedBox, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingCard({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 2.4,
  height = 1.35,
  color = "#111827",
  accent = "#8b5cf6",
  title = "NOVA AI",
  value = "98%",
}) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z =
      rotation[2] +
      Math.sin(state.clock.elapsedTime * 0.45) * 0.015;
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.18}
      floatIntensity={0.35}
    >
      <group
        ref={groupRef}
        position={position}
        rotation={rotation}
      >
        <RoundedBox
          args={[width, height, 0.08]}
          radius={0.12}
          smoothness={5}
        >
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.92}
            roughness={0.2}
            metalness={0.55}
            clearcoat={0.8}
          />
        </RoundedBox>

        <mesh position={[-width / 2 + 0.22, height / 2 - 0.22, 0.06]}>
          <sphereGeometry args={[0.055, 24, 24]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={2}
          />
        </mesh>

        <Text
          position={[-width / 2 + 0.22, 0.18, 0.075]}
          fontSize={0.13}
          color="#94a3b8"
          anchorX="left"
          anchorY="middle"
        >
          {title}
        </Text>

        <Text
          position={[-width / 2 + 0.22, -0.17, 0.075]}
          fontSize={0.28}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          fontWeight={700}
        >
          {value}
        </Text>
      </group>
    </Float>
  );
}