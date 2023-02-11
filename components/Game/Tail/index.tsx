import React from "react";
import { View } from "react-native";
import Constants from "../../../constants/Game";
interface TailProps {
  elements: number[][];
  position: number[];
  size: number;
}

export default function Index({ elements, position, size }: TailProps) {
  const tailList = elements.map((el, idx) => (
    <View
      key={idx}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: el[0] * size,
        top: el[1] * size,
        backgroundColor: "red",
      }}
    />
  ));
  return (
    <View
      style={{
        width: Constants.GRID_SIZE * size,
        height: Constants.GRID_SIZE * size,
      }}
    >
      {tailList}
    </View>
  );
}