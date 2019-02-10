import { Button, WingBlank, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { Text, StyleSheet } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import InputItem from "../../../components/InputItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Register extends Component<IProps> {
  public render() {
    return (
      <WingBlank style={styles.wrapper}>
        <Text style={styles.title}>Additional Info</Text>
        <Text style={styles.description}>Let us know who you are</Text>

        <WhiteSpace size="xl" />

        <InputItem label="Role" placeholder="ex : student" />
        <InputItem label="Country" placeholder="ex : indonesia" />
        <InputItem label="City" placeholder="ex : malang" />
        <InputItem label="Contact" placeholder="ex : +628512345678" />

        <WhiteSpace size="xl" />

        <Button
          style={styles.button}
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
  button: {
    alignSelf: "stretch",
  },
})
