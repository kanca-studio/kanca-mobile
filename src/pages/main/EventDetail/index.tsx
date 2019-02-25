import React, { Component } from "react";
import { Text, View, StyleSheet,ImageBackground } from "react-native";
import { Button } from "@ant-design/react-native";
import { NavigationScreenProp, NavigationStackScreenOptions } from "react-navigation";
import constants from "../../../config/constants";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class EventDetail extends Component<IProps> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Create Event",
  }
  state = {
    absent: false,
    attend: false
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.bannerContainer}> */}
        <ImageBackground source={require('../../../../assets/FB.jpg')} resizeMode={"cover"} style={styles.bannerContainer} />
          <View style={styles.text}>
            <Text style={styles.textEventName}>Event Name</Text>
            <Text style={styles.textEventDate}>Event Date</Text>
            <Text style={styles.textEventLocation}>Event Location</Text>
            <Text style={styles.textOrganized}>
              Organized by : Facebook Developer Circle Malang
            </Text> 
          </View>
        {/* </ImageBackground> */}
        {/* </View> */}

        <View style={styles.content}>
          <View
            style={styles.eventContent}
          >
            <Text>Event Description:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consectetur facilisis sem, vel maximus augue egestas
              quis. Maecenas fringilla orci at lacinia luctus.
            </Text>
          </View>
          <View style={styles.eventSpacing} />
          <Button
            style={styles.btnChecked}
            type="primary"
            onPress={() => this.setState({ attend: !this.state.attend })}
          >
            Check In
          </Button>

          <Button
            style={styles.btnChecked}
            type="ghost"
            onPress={() => this.setState({ absent: !this.state.absent })}
          >
            Absent
          </Button>

          {/* <Text
            onPress={() => this.setState({ absent: !this.state.absent })}
            style={{ color: "gray", alignSelf: "center", top: 50 }}
          >
            Absent
          </Text> */}
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
    // height: constants.DEVICE_HEIGHT,
    height: 300,
	opacity: 0.5,
    //backgroundColor: "skyblue",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    width: constants.DEVICE_WIDTH,
    height: constants.DEVICE_HEIGHT,
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
  },
  image: {
    width: constants.DEVICE_WIDTH * 0.95,
    height: 200,
    opacity: 0.5,
  },
  textEventName: {
    fontSize: 30,
  },
  textEventDate: {
    fontSize: 20, 
    color: "black",
  },
  textEventLocation: {
    fontSize: 15, 
    color: "black",
  },
  textOrganized: {
    marginTop: 20,
  },
  eventContent: {
    width: constants.DEVICE_WIDTH * 0.8,
    alignSelf: "center",
    top: 20,
  },
  eventSpacing: {
    margin: 30
  },
  btnChecked: {
    width: constants.DEVICE_WIDTH * 0.6,
    alignSelf: "center",
    marginTop: 20,
  },
});
