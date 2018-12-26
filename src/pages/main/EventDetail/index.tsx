import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@ant-design/react-native";
import { NavigationScreenProp } from "react-navigation";
import constants from "../../../config/constants";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class EventDetail extends Component<IProps> {
  state = {
    absent: false,
    attend: false
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Text style={{ fontSize: 30 }}>Event Name</Text>
          <Text style={{ fontSize: 20, color: "white" }}>Event Date</Text>
          <Text style={{ fontSize: 15, color: "white" }}>Event Location</Text>
          <Text style={{ marginTop: 20 }}>
            Organized by : Facebook Developer Circle Malang
          </Text>
        </View>

        <View style={styles.content}>
          <View
            style={{
              width: constants.DEVICE_WIDTH * 0.8,
              alignSelf: "center",
              top: 20
            }}
          >
            <Text>Event Description:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consectetur facilisis sem, vel maximus augue egestas
              quis. Maecenas fringilla orci at lacinia luctus.
            </Text>
          </View>
          <View style={{ margin: 30 }} />
          <Button
            style={{
              width: constants.DEVICE_WIDTH * 0.6,
              alignSelf: "center",
              marginTop: 20
            }}
            type="ghost"
            onPress={() => this.setState({ attend: !this.state.attend })}
          >
            Check In
          </Button>
          <Text
            onPress={() => this.setState({ absent: !this.state.absent })}
            style={{ color: "gray", alignSelf: "center", top: 50 }}
          >
            Absent
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: constants.DEVICE_WIDTH,
    height: constants.DEVICE_HEIGHT,
    backgroundColor: "skyblue"
  },
  content: {
    width: constants.DEVICE_WIDTH,
    height: constants.DEVICE_HEIGHT * 0.5,
    backgroundColor: "white",
    alignContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
