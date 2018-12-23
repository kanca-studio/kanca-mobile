import React, { Component } from "react"
import { View, Image } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import SplashImage from "../../assets/icon.png"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class SplashScreen extends Component<IProps> {
  public componentDidMount() {
    // TODO: check login credentials
    setTimeout(() => this.props.navigation.navigate("CommunityList"), 1000)
  }

  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
        <Image source={SplashImage} />
      </View>
    )
  }
}
