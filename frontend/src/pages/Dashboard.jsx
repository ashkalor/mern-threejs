import { useEffect, Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Spinner from "../components/Spinner";
import Model from "../models/Scene";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  function Rotate(props) {
    const ref = useRef();
    useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
    return <group ref={ref} {...props} />;
  }

  return (
    <>
      <Suspense
        fallback={
          <Spinner
            desc={`Please wait while we load the model`}
            user={user?.name}
          />
        }
      >
        <Canvas
          gl={{ alpha: false }}
          dpr={[1, 1.5]}
          camera={{ fov: 70, position: [0, 2, 15] }}
          shadows
        >
          <color attach="background" args={["#191920"]} />
          <fog attach="fog" args={["#191920", 0, 15]} />
          <Environment preset="city" />
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2.3}
            minPolarAngle={Math.PI / 2.3}
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
          />
          <group position={[0, -0.5, 0]}>
            <Rotate>
              <Model scale={0.0007} />
            </Rotate>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 11]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={2048}
                mixBlur={0}
                mixStrength={11}
                mixContrast={1}
                mirror={1}
                depthToBlurRatioBias={1}
                roughness={100}
                depthScale={1.4}
                minDepthThreshold={1.2}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
          </group>
          <group position={[2, -0.5, -1]}>
            <Model scale={0.0007} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 11]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={2048}
                mixBlur={0}
                mixStrength={11}
                mixContrast={1}
                mirror={1}
                depthToBlurRatioBias={1}
                roughness={100}
                depthScale={1.4}
                minDepthThreshold={1.2}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
          </group>
          <group position={[-2, -0.5, -1]}>
            <Model scale={0.0007} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 11]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={2048}
                mixBlur={0}
                mixStrength={11}
                mixContrast={1}
                mirror={1}
                depthToBlurRatioBias={1}
                roughness={100}
                depthScale={1.4}
                minDepthThreshold={1.2}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
          </group>

          <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
            <spotLight
              position={[0, 10, 0]}
              angle={0.1}
              penumbra={2}
              intensity={5}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
          </PerspectiveCamera>
        </Canvas>
      </Suspense>
    </>
  );
};
export default Dashboard;
