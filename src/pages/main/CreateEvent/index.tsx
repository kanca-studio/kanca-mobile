import React, { Component } from "react"
import { WingBlank } from "@ant-design/react-native"
import InputItem from "../../../components/InputItem"

export default class CreateEvent extends Component {
  public render() {
    return (
      <WingBlank>
        <InputItem label="Name" placeholder="ex: monthly meetup" />
        <InputItem label="Date" placeholder="enter event date" />
        <InputItem
          label="Location"
          placeholder="ex: the bros caffe and coworking space"
        />
        <InputItem multiline label="Description" placeholder="" />
      </WingBlank>
    )
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
}
