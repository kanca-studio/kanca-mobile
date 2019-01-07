import { Text, StyleSheet } from "react-native"
import { Button, WingBlank, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import InputItem from "../../../components/InputItem"
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class CommunityCreate extends Component<IProps> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Create Community",
  }

  public render() {
    return (
      <WingBlank style={styles.wrapper}>
        <Text style={styles.title}>Create Your Community</Text>
        <Text>Make the world better with your community</Text>
        <WhiteSpace size="xl" />

        <InputItem label="Name" placeholder="ex: devc malang" />
        <InputItem
          multiline={true}
          label="Description"
          placeholder="your community description"
        />
        <InputItem label="Country" placeholder="ex: indonesia" />
        <InputItem label="City" placeholder="ex: malang" />
        <InputItem label="Banner" placeholder="your community banner" />
        <WhiteSpace size="xl" />

        <Button
          style={styles.button}
          type="primary"
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Create Community
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
  button: {
    alignSelf: "stretch",
  },
})
