import { useMemo } from "react";
import { AmbientLight, PointLight, SpotLight } from "three";

export default function SceneLighting({ intensity = 1 }) {
  const lights = useMemo(
    () => ({
      ambient: new AmbientLight("#ffffff", 0.7 * intensity),
      key: new PointLight("#8b5cf6", 18 * intensity, 20, 2),
      fill: new PointLight("#38bdf8", 12 * intensity, 18, 2),
      rim: new SpotLight("#ffffff", 20 * intensity, 25, Math.PI / 5, 0.45, 1.5),
    }),
    [intensity]
  );

  return (
    <>
      <primitive object={lights.ambient} />

      <primitive
        object={lights.key}
        position={[4, 4, 5]}
      />

      <primitive
        object={lights.fill}
        position={[-5, 1, 3]}
      />

      <primitive
        object={lights.rim}
        position={[0, 5, -6]}
        target-position={[0, 0, 0]}
      />
    </>
  );
}