import React from "react";
import {View} from "react-native";

interface HeadProps {
  position: number[];
  size: number;
}

export default function Head({position, size}: HeadProps) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "red",
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
      }}
    ></View>
  );
}