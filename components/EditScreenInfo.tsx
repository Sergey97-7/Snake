import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import {MonoText} from './StyledText';
import {Text, View} from './Themed';

export default function EditScreenInfo({path}: { path: string }) {
  return (
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          This is a game called "Snake"!
        </Text>
        <Text
          style={styles.mainText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          If you want to help me, then here is the card number: 0000 0000 0000 0000
        </Text>
      </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  mainText: {
    marginTop: 15,
    marginHorizontal: 10,
    fontSize: 17,
    lineHeight: 24,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
