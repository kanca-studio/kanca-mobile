import React, { Component } from "react"
import { WingBlank, Button, WhiteSpace } from "@ant-design/react-native"
import InputItem from "../../../components/InputItem"
import ImagePicker from "../../../components/ImagePicker"
import { NavigationStackScreenOptions } from "react-navigation"
import { StyleSheet, ScrollView } from "react-native"

export default class CreateEvent extends Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Create Event",
  }

  public render() {
    return (
      <WingBlank style={styles.container}>
        <WhiteSpace size="xl" />
        <ScrollView>
          <ImagePicker label="Pick Event Poster" />
          <InputItem label="Name" placeholder="ex: monthly meetup" />
          <InputItem label="Date" placeholder="enter event date" />
          <InputItem
            label="Location"
            placeholder="ex: the bros caffe and coworking space"
          />
          <InputItem
            multiline
            label="Description"
            placeholder="enter event description"
          />
        </ScrollView>

        <WhiteSpace size="xl" />
        <Button type="primary" style={styles.button}>
          Create Event
        </Button>
      </WingBlank>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  button: {
    alignSelf: "stretch",
    marginHorizontal: -15,
    borderRadius: 0,
  },
})
