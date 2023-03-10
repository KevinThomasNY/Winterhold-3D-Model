import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";
export default function Model() {
  const model = useGLTF("./Winterhold3DModel.glb");
  const animations = useAnimations(model.animations, model.scene);

  const { animationName } = useControls({
    animationName: {
      value: "Both_Fans",
      options: {
        "Fan 1": "BAC_M_Fan_Final_0Action.001",
        "Fan 2": "BAC_M_Fan_Final_0Action.003",
        "Play Both": "Both_Fans",
        "Stop Animation": "Stop_animation",
      },
    },
  });
  useEffect(() => {
    if (animationName === "Stop Animation") {
      animations.actions["BAC_M_Fan_Final_0Action.001"].fadeOut(0.1);
      animations.actions["BAC_M_Fan_Final_0Action.003"].fadeOut(0.1);
    } else if (animationName === "Both_Fans") {
      animations.actions["BAC_M_Fan_Final_0Action.001"]
        .reset()
        .fadeIn(0.1)
        .play();
      animations.actions["BAC_M_Fan_Final_0Action.003"]
        .reset()
        .fadeIn(0.1)
        .play();
    } else {
      const action = animations.actions[animationName];
      if (action) {
        action.reset().fadeIn(0.1).play();
      }
    }

    return () => {
      animations.actions["BAC_M_Fan_Final_0Action.001"].fadeOut(0.1);
      animations.actions["BAC_M_Fan_Final_0Action.003"].fadeOut(0.1);
    };
  }, [animationName]);

  return (
    <primitive
      object={model.scene}
      scale={3.7}
      position={[-1, -0.2, 0.7]}
      rotation={[0, 0.45, 0]}
    />
  );
}
useGLTF.preload("./Winterhold3DModel.glb");
