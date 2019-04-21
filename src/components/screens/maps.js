import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Permissions, Location, Marker } from "expo";

export default class App extends React.Component {
  state = {
    location: null
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Location Permission not granted!");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(location);
  };
  componentDidMount() {
    this._getLocationAsync();
  }
  render() {
    if (!this.state.location) {
      return <View />;
    }
    return (
      <MapView
        style={{ flex: 1 }}
        // provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={this.state.location.coords}
          title="👨‍💻 Hola! I am here!"
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});

// <View style={styles.container}>
//   <Text>Azim Shaik Open up App.js to start working on your app!</Text>
// </View>
