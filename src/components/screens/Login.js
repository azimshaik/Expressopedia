import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

export default class Login extends Component {
  login() {
    this.props.navigation.navigate("register");
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
        <Text>New user?</Text>
      </TouchableOpacity>
    );
  }
}
