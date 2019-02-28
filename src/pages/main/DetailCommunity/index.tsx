import { Button, Card, Icon, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import constants from "../../../config/constants"

const URI_IMAGE = "https://picsum.photos/200/300"

interface IProp {
  navigation: NavigationScreenProp<any, any>
}

export default class DetailCommunity extends Component<IProp> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Detail Community",
  }

  public render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={{ uri: URI_IMAGE }} style={styles.imageHeader} />
          <View style={styles.descriptionContainer}>
            <WhiteSpace />
            <Text>Event Description:</Text>
            <WhiteSpace />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consectetur facilisis sem, vel maximus augue egestas
              quis. Maecenas fringilla orci at lacinia luctus.
            </Text>
          </View>
          <WhiteSpace />
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text>Event</Text>
              <WhiteSpace />
              <Button>+</Button>
            </View>
            <ScrollView horizontal={true} >
              <Card style={styles.horizontalView}>
                <Card.Header
                  title="01 Jan"
                  extra={<Text>Event name here</Text>}
                />
                <Card.Body>
                  <MaterialCommunityIcons type="location" />
                </Card.Body>
              </Card>
              <Card style={styles.horizontalView}>
                <Card.Header
                  title="01 Jan"
                  extra={<Text>Event name here</Text>}
                />
                <Card.Body>
                   <MaterialCommunityIcons type="location" />
                </Card.Body>
              </Card>
              <Card style={styles.horizontalView}>
                <Card.Header
                  title="01 Jan"
                  extra={<Text>Event name here</Text>}
                />
                <Card.Body>
                  <MaterialCommunityIcons type="location" />

                </Card.Body>
              </Card>
            </ScrollView>
          </View>
          <View>
            <WhiteSpace />
            <Text>Members</Text>
            <WhiteSpace />
            <ScrollView horizontal={true}>
              <Button style={styles.roundedButton}>
                <Image source={{ uri: URI_IMAGE }} />
              </Button>
              <Button style={styles.roundedButton}>
                <Image source={{ uri: URI_IMAGE }} />
              </Button>
              <Button style={styles.roundedButton}>
                <Image source={{ uri: URI_IMAGE }} />
              </Button>
            </ScrollView>
          </View>
          <Button
            type="primary"
            onPress={() => this.props.navigation.navigate("CommunityList")}
          >
            Go To Community List
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    padding: 10,
  },
  imageHeader: {
    width: constants.DEVICE_WIDTH-20,
    height: 200,
  },
  horizontalView:{
    width: constants.DEVICE_WIDTH
  },
  imageHorizontalView: {},
  roundedButton: {
    margin: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
})
