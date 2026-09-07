import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({
  count = 650,
  radius = 7,
  color = "#8b5cf6",
}) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const distance =
        radius * (0.35 + Math.random() * 0.65);

      data[i3] =
        Math.sin(phi) * Math.cos(theta) * distance;

      data[i3 + 1] =
        Math.cos(phi) * distance * 0.7;

      data[i3 + 2] =
        Math.sin(phi) * Math.sin(theta) * distance;
    }

    return data;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x += delta * 0.004;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color={color}
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.65}
      />
    </Points>
  );
}