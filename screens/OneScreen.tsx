import {Button, Pressable, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import * as React from "react";

export default function OneScreen({navigation}: RootTabScreenProps<'MainScreen'>) {
  return (
    <View style={styles.container}>


      {/*<Pressable*/}
      {/*  // onPress={() => navigation.navigate('TabTwo')}*/}
      {/*  style={({pressed}) => ({*/}
      {/*    // opacity: pressed ? 0.5 : 1,*/}
      {/*  })}>*/}
        <FontAwesome.Button size={20} name="play" backgroundColor="#3b5998"
                            onPress={()=> navigation.navigate('TabTwo')}
        >
          Play
        </FontAwesome.Button>
        {/*<Button title={'Play'}/>*/}
        {/*<MaterialIcons name="play" size={38} color="#25292e"/>*/}
      {/*</Pressable>*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
