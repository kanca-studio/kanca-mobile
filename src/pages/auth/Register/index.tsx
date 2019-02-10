import { Button, WingBlank, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import PageTitle from "../../../components/PageTitle"
import InputItem from "../../../components/InputItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Register extends Component<IProps> {
  public render() {
    return (
      <WingBlank style={styles.container}>
        <PageTitle
          title="Additional Info"
          description="Let us know who you are"
        />

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
          Register
        </Button>
      </WingBlank>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
