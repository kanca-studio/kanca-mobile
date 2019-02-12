import React, { Component } from "react"
import { WingBlank, Button } from "@ant-design/react-native"
import InputItem from "../../../components/InputItem"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class CreateEvent extends Component<IProps> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Create Event",
  }

  public render() {
    return (
      <WingBlank>
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

        <Button type="primary" onPress={() => this.props.navigation.navigate("EventDetail")}>Create Event</Button>
      </WingBlank>
    )
  }
}
