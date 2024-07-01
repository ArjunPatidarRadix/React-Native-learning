import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber/native";
import { useGLTF } from "@react-three/drei/native";
// import modelPath from "./car.glb";
// import modelPath from "./../../assets/monkey.glb";
import { Asset } from "expo-asset";
import usePromise from "react-promise-suspense";

function Scene(props) {
  // const gltf = useLoader(GLTFLoader, modelPath) as GLTF;
  // const fbx = useFBX("/avatar.fbx");

  // return <primitive object={gltf.scene} />;

  // const { scene } = useGLTF(modelPath);
  // const { scene } = useGLTF("./car.glb");
  // const { scene } = useGLTF("/scense.gltf");

  const getUrl = async () => {
    const asset = Asset.fromModule(require("../../../assets/scene.gltf"));
    await asset.downloadAsync();
    return asset.localUri;
  };

  const url = usePromise(getUrl, []);

  const { scene } = useGLTF(url);

  // const { scene } = useGLTF(modelPath);
  // return <primitive object={scene} {...props} />;
  // const gltf = useLoader(GLTFLoader, "/Poimandres.gltf");
  return <primitive {...props} object={scene} />;
}

function ReactModel(props) {
  const getUrl = async () => {
    const asset = Asset.fromModule(require("../../../assets/scene.gltf"));
    await asset.downloadAsync();
    return asset.localUri;
  };

  const url = usePromise(getUrl, []);

  const { nodes, materials } = useGLTF(url);

  // Using a remote url is also not gonna work
  // const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group scale={0.303}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.glass_mat}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.rough_plasitc_mat}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.body_mat}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.backlight}
        />
        <mesh geometry={nodes.Object_9.geometry} material={materials.dark} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.aluminum}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[0.328, -0.338, 0.519]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.128, 0.184, 0.128]}
      >
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[0.328, -0.338, -0.638]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.128, 0.184, 0.128]}
      >
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group
        position={[-0.323, -0.338, -0.638]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.128, 0.184, 0.128]}
      >
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[-0.323, -0.338, 0.533]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.128, 0.184, 0.128]}
      >
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials["Material.008"]}
        position={[0.3, -0.338, 0.519]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.104}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials["Material.006"]}
        position={[0.3, -0.338, -0.638]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.104}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials["Material.007"]}
        position={[-0.295, -0.338, -0.638]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={0.104}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials["Material.009"]}
        position={[-0.295, -0.338, 0.533]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={0.104}
      />
    </group>
  );
}

const AvatarScreen = () => {
  // const gltf = useLoader(GLTFLoader, modelPath);
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ReactModel />
      </Suspense>
    </Canvas>
  );

  // return (
  //   <Canvas shadows camera={{ fov: 45 }}>
  //     <Scene />

  //     {/* <Suspense fallback={null}>
  //       <PresentationControls
  //         speed={1.5}
  //         global
  //         zoom={0.5}
  //         polar={[-0.1, Math.PI / 4]}
  //       >
  //         <Stage environment={"sunset"}>
  //           <Scene />
  //         </Stage>
  //       </PresentationControls>
  //     </Suspense> */}
  //   </Canvas>
  // );
};

export default AvatarScreen;

// useGLTF.preload(modelPath);
