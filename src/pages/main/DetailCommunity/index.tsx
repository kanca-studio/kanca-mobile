import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "@ant-design/react-native"
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from "react-navigation"

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
        <Text>Detail Community</Text>
        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate("CommunityList")}
        >
          Go To Community List
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
