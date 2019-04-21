import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  MainFeed,
  Login,
  Register,
  Camera,
  Profile
} from "./components/screens";
import {
  TabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
});
const IntroStack = createStackNavigator({
  login: Login,
  register: Register
});
const MainStack = createSwitchNavigator({
  intro: IntroStack,
  main: Tabs
});
export default createAppContainer(
  createSwitchNavigator({
    App: MainStack,
    Tab: Tabs
  })
);

// export default class Instaclone extends Component {
//   render() {
//     return <MainStack />;
//   }
// }
