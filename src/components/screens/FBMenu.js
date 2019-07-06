import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Image
} from "react-native";

export default class FBMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.conatiner}>
          <TouchableWithoutFeedback
            style={styles.conatiner}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.conatiner}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require("../../../assets/heart.png")}
                />
                <Text style={styles.title}>Project O</Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="default"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPhone.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  autoCorrect={false}
                  ref={"txtPhone"}
                  onSubmitEditing={() => this.refs.txtEmail.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  ref={"txtEmail"}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  secureTextEntry={true}
                  returnKeyType="go"
                  autoCorrect={false}
                  ref={"txtPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(252,61,57)"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200
  },
  logo: {
    width: 50,
    height: 50
  },
  title: {
    color: "yellow",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 1
    //backgroundColor: "gray"
  },
  input: {
    height: 40,
    //width: 100 + "%",
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
