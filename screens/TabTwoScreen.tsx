import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {GameEngine} from "react-native-game-engine";
import React, {useRef, useState} from "react";
import Constants from "../constants/Game";
import Head from "../components/Game/Head";
import Food from "../components/Game/Food";
import Tail from "../components/Game/Tail";
import GameLoop from "../components/Game/systems/GameLoop";


export default function TabTwoScreen() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const randomPositions = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [isGameRunning, setIsGameRunning] = useState(true);
  const resetGame = () => {
    engine.current.swap({
      head: {
        position: [0, 0],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Head/>,
      },
      food: {
        position: [
          randomPositions(0, Constants.GRID_SIZE - 1),
          randomPositions(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Food/>,
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail/>,
      },
    });
    setIsGameRunning(true);
  };

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={{
          marginTop: 20,
          width: BoardSize,
          height: BoardSize,
          flex: null,
          backgroundColor: "white",
        } as any}
        entities={{
          head: {
            position: [0, 0],
            size: Constants.CELL_SIZE,
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 0,
            yspeed: 0,
            renderer: <Head/>,
          },
          food: {
            position: [
              randomPositions(0, Constants.GRID_SIZE - 1),
              randomPositions(0, Constants.GRID_SIZE - 1),
            ],
            size: Constants.CELL_SIZE,
            renderer: <Food/>,
          },
          tail: {
            size: Constants.CELL_SIZE,
            elements: [],
            renderer: <Tail/>,
          },
        }}
        systems={[GameLoop]}
        running={isGameRunning}
        onEvent={(e) => {
          switch (e) {
            case "game-over":
              alert("Game over!");
              setIsGameRunning(false);
              return;
          }
        }}

      />
      <View style={styles.controlContainer}>
        <View style={styles.controllerRow}>
          <TouchableOpacity onPress={() => engine.current.dispatch("move-up")}>
            <View style={styles.controlBtn}/>
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-left")}
          >
            <View style={styles.controlBtn}/>
          </TouchableOpacity>
          <View style={[styles.controlBtn, {backgroundColor: null}]}/>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-right")}
          >
            <View style={styles.controlBtn}/>
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-down")}
          >
            <View style={styles.controlBtn}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        {!isGameRunning && (
          <TouchableOpacity onPress={resetGame}>
            <Text
              style={{
                color: "white",
                // marginTop: 4,
                fontSize: 22,
                padding: 10,
                backgroundColor: "grey",
                borderRadius: 10
              }}
            >
              Start New Game
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    // justifyContent: "center",
  },
  controlContainer: {
    marginTop: 10,
    // marginBottom: 10,
  },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "yellow",
    width: 60,
    height: 60,
  },
});
