import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions
} from "react-native";
import { MapView, Permissions, Location, Marker } from "expo";
import Instaclone from "./src/Instaclone";

import bgimage from "./assets/bgimage.jpg";
import logo from "./assets/icon.png";

const { width: WIDTH } = Dimensions.get("window");
export default class App extends React.Component {
  render() {
    return <Instaclone />;
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "yellow",
    color: "black",
    marginHorizontal: 25
  }
});

// <View style={styles.container}>
//   <Text>Azim Shaik Open up App.js to start working on your app!</Text>
// </View>
