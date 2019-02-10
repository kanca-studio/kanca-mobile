import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import SplashImage from "../../assets/icon.png"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class SplashScreen extends Component<IProps> {
  public componentDidMount() {
    // TODO: check login credentials
    setTimeout(() => this.props.navigation.navigate("Welcome"), 1000)
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image source={SplashImage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
})
