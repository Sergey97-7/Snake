/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from '../types';
import OneScreen from "../screens/OneScreen";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      OneScreen: {

      },
      MainScreen: {
        screens: {
          TabOneScreen: 'one',
        },
      },
      Root: {
        screens: {
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Modal: 'Modal',
      NotFound: '*',
    },
  },
};

export default linking;
