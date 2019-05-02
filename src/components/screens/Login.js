import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import config from "../config/";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    };
  }
  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
    //alert(text);
  }
  login() {
    //alert(JSON.stringify(this.state.credentials));
    //this.props.navigation.navigate("main");
    console.log(JSON.stringify(this.state.credentials));
    let credentials = this.state.credentials;
    credentials.email = this.state.credentials.email.toLowerCase();
    console.log(credentials.email);
    fetch(config.baseUrl + "login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(jsonResponse => {
        //console.log(JSON.stringify(jsonResponse));
        if (jsonResponse.confirmation === "success") {
          this.props.navigation.navigate("main");
        } else {
          throw new Error(jsonResponse.message);
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err.message));
        alert(JSON.stringify(err.message));
      });
  }
  // azim@aol.com
  // password
  render() {
    return (
      <View
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(252,61,57)"
        }}
        onPress={() => this.register()}
      >
        <Text>Register Screen</Text>
        <TextInput
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={text => this.updateText(text, "email")}
          placeholder="Username"
          style={styles.input}
          autoCorrect={false}
        />
        <TextInput
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={text => this.updateText(text, "password")}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          autoCorrect={false}
        />
        <Button
          onPress={() => {
            this.login();
          }}
          title="Log in!"
        />
        <Button
          title="No account? Sign up here!"
          onPress={() => this.props.navigation.navigate("register")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 100 + "%",
    paddingHorizontal: 50,
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 10
  }
});
