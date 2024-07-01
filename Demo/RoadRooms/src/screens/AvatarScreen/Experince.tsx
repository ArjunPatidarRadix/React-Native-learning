import { View, Text } from "react-native";
import React from "react";
import { OrbitControls } from "@react-three/drei";

export default function Experince() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
