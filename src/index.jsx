import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Sidebar from "./Sidebar";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <Canvas
      style={{ touchAction: "none" }}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [5, 2.5, 2.8],
      }}
    >
      <Experience />
    </Canvas>
    <Sidebar />
  </>
);
