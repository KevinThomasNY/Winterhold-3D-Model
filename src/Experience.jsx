import { Text, PresentationControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model";
import { Suspense } from "react";

export default function Experience() {
  return (
    <>
      <Perf position="bottom-left" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Suspense
        fallback={
          <Text
            position={[-1, 0, 0.7]}
            rotation={[0, 0.45, 0]}
            fontSize={2}
            color="limegreen"
            anchorX="center"
            anchorY="middle"
          >
            Loading...
          </Text>
        }
      >
        <PresentationControls
          snap
          global={true}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[0, Math.PI / 50]}
          azimuth={[-Math.PI / 8, Math.PI / 12]}
        >
          <Model />
        </PresentationControls>
      </Suspense>
    </>
  );
}
