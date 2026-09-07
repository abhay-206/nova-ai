import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingOrb({
  position = [0, 0, 0],
  size = 1,
  color = "#7c3aed",
  speed = 1,
  distort = 0.35,
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35 * speed) * 0.2;

    meshRef.current.rotation.y += 0.0025 * speed;
  });

  return (
    <Float
      speed={1.2 * speed}
      rotationIntensity={0.35}
      floatIntensity={0.7}
    >
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.18}
          roughness={0.16}
          metalness={0.75}
          distort={distort}
          speed={1.5 * speed}
        />
      </Sphere>
    </Float>
  );
}