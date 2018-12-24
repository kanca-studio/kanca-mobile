import { Button } from "@ant-design/react-native"
import React, { Component } from "react"
import { Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import InputItem from "../../../components/InputItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class CommunityList extends Component<IProps> {
  public render() {
    return (
      <View>
        <Text>Community List</Text>
        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate("CommunityCreate")}
        >
          Go To Community Create
        </Button>
        <InputItem label={"Username"} placeholder={"ex: Fordable"} />
      </View>
    )
  }
}
