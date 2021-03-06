import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Profile extends Component {
  login() {
    this.props.navigation.navigate("main");
    alert("Pressed Login");
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => this.login()}
      >
        <Text>Profile Screen</Text>
      </TouchableOpacity>
    );
  }
}
