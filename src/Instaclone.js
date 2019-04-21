import React, { Component } from "react";
import { View, Text } from "react-native";
import { MainFeed, Login, Camera, Profile } from "./components/screens";
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
// const IntroStack = createStackNavigator({

// });
const MainStack = createSwitchNavigator({
  login: Login,
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
