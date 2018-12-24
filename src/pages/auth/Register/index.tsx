import {
  Button,
  WingBlank,
  InputItem,
  WhiteSpace,
} from "@ant-design/react-native"
import React, { Component } from "react"
import { Text, StyleSheet } from "react-native"
import { NavigationScreenProp } from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Register extends Component<IProps> {
  public render() {
    return (
      <WingBlank style={styles.wrapper}>
        <Text style={styles.title}>Enter Additional Info</Text>
        <Text style={styles.description}>Let us know who you are</Text>

        <WhiteSpace size="xl" />

        <InputItem type="text" placeholder="ex : student">
          Role
        </InputItem>

        <InputItem type="text" placeholder="ex : indonesia">
          Country
        </InputItem>

        <InputItem type="text" placeholder="ex : malang">
          City
        </InputItem>

        <InputItem type="text" placeholder="ex : +628512345678">
          Contact
        </InputItem>

        <WhiteSpace size="xl" />

        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate("CommunityList")}
        >
          Submit
        </Button>
      </WingBlank>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  description: {
    fontSize: 18,
  },
})
