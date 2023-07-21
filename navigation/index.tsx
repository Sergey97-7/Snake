/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Text} from "../components/Themed";
import HeaderTitle from "../components/HeaderTitle";
import OneScreen from "../screens/OneScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="OneScreen" component={OneScreen} options={{headerShown: true,}}/>*/}
      {/*<Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false,}}/>*/}
      <Stack.Screen name="MainScreen"

                    component={TabOneScreen}
                    options={({navigation}: RootTabScreenProps<'MainScreen'>) => ({
                      tabBarActiveTintColor: Colors[colorScheme].tint,
                      // tabBarStyle: { display: '' },
                      headerTitle: () => <HeaderTitle title={'Sssnake!'}/>,
                      tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                      headerRight: () => (
                        <Pressable
                          onPress={() => navigation.navigate('Modal')}
                          style={({pressed}) => ({
                            opacity: pressed ? 0.5 : 1,
                          })}>
                          <FontAwesome
                            name="info-circle"
                            size={25}
                            color={Colors[colorScheme].text}
                            style={{marginRight: 15}}
                          />
                        </Pressable>
                      ),
                      tabBarVisible: false,
                    })}
      />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false,}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Modal" options={{title: 'About app'}} component={ModalScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation()

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      {/*<BottomTab.Screen*/}
      {/*  name="MainScreen"*/}
      {/*  component={TabOneScreen}*/}
      {/*  options={({navigation}: RootTabScreenProps<'MainScreen'>) => ({*/}
      {/*    // tabBarStyle: { display: '' },*/}
      {/*    headerTitle: () => <HeaderTitle title={'Sssnake!'}/>,*/}
      {/*    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.navigate('Modal')}*/}
      {/*        style={({pressed}) => ({*/}
      {/*          opacity: pressed ? 0.5 : 1,*/}
      {/*        })}>*/}
      {/*        <FontAwesome*/}
      {/*          name="info-circle"*/}
      {/*          size={25}*/}
      {/*          color={Colors[colorScheme].text}*/}
      {/*          style={{marginRight: 15}}*/}
      {/*        />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*    tabBarVisible: false,*/}
      {/*  })}*/}
      {/*/>*/}
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarShowLabel: false,
          // title:
          // tabBarShowLabel: false,
          // tabBarStyle: { display: '' },
          // tabBarIcon: '',
          headerTitle: () => <HeaderTitle title={'Sssnake!'}/>,
          // tabBarLabel: false,
          tabBarIcon: ({color}) => (
            // <AntDesign name="caretleft" size={24} color="black" />
            <FontAwesome.Button size={20} name="backward" backgroundColor="#3b5998"
                                onPress={() => navigation.navigate('MainScreen')}
            >
              To Main
            </FontAwesome.Button>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
//<i class="fa-solid fa-up"></i>

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
