import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../config";
export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }
  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }
  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection =
      this.props.item % 2 == 0
        ? "https://lh3.googleusercontent.com/6_8HFWIre9_V7wSU_J0udDAzzsinQGsBM_MDd5fg6N8vHSEdPRPDNxgi4t4vJPVI2VZsGCkj0BYE9vN4qpaly5vQ"
        : "https://lh3.googleusercontent.com/4S2_yu3fJTZj2Kb1qUB2nHMNii6Lihn5OIcCrtZovmGzAfdoz6oEMulR5wsvzLk5RsLq_bN6UELaRyhvmtlJ9WZF";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";
    const heartIconColor = this.state.liked ? "red" : null;
    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/20pYJYcTgsKSah3VMAuRfbF7UzisDZWDLyqSVK7RTi6XLBSXeDlNOQ8BX1gvOHYcpVkb-RXabzo47ItWFRMMwItGFaw"
              }}
            />
            <Text style={{ marginLeft: 10 }}> Azim Shaik</Text>
          </View>
          <View>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.likeToggled();
            //alert("Image Liked");
          }}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 40, width: 40, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 35, width: 37 }]}
            source={config.images.bubbleIcon}
          />
          <Image
            style={[styles.icon, { height: 35, width: 35 }]}
            source={config.images.arrowIcon}
          />
        </View>
        <View style={styles.commentBar}>
          <Image
            style={[
              styles.icon,
              { height: 20, width: 20, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Text>128 Likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    marginTop: 30,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    flexDirection: "row",
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginHorizontal: 2
  },
  commentBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row"
  }
});
