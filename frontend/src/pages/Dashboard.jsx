import { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Model from "../models/Scene";
import {
  OrbitControls,
  Environment,
  Backdrop,
  ContactShadows,
} from "@react-three/drei";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Canvas
        style={{ background: "black" }}
        dpr={[1, 2]}
        shadows
        camera={{
          fov: 75,
          near: 1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
        <directionalLight
          position={[-1, -2, -5]}
          intensity={0.2}
          color="#0c8cbf"
        />
        <spotLight
          position={[5, 0, 5]}
          intensity={2.5}
          penumbra={1}
          angle={0.35}
          castShadow
          color="#0c8cbf"
        />
        <Suspense fallback={null}>
          <Model position={[0, -4, -1]} scale={0.003} />
        </Suspense>
        <Backdrop
          castShadow
          floor={2}
          position={[0, -7.5, -13]}
          scale={[100, 800, 40]}
        >
          <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
        </Backdrop>
        <ContactShadows
          position={[0, -0.485, 0]}
          scale={5}
          blur={1.5}
          far={1}
        />
        <Environment preset="city" />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
};
export default Dashboard;
