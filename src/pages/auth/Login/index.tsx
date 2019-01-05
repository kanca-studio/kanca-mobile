import { Button, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { View, StyleSheet, Image } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Logo from "../../../../assets/logo.png"
import constant from "../../../config/constants"
import InputItem from "../../../components/InputItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Login extends Component<IProps> {

  public render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.form}>
          <InputItem
            icon={<MaterialCommunityIcons name="email" size={32} />}
            placeholder="Your email address"
          />
          <InputItem
            secureTextEntry
            icon={<MaterialCommunityIcons name="lock" size={32} />}
            placeholder="Your password"
          />
          <Button type="primary" onPress={() => navigate("CommunityList")}>
            Login
          </Button>
          <WhiteSpace />
          <Button type="ghost" onPress={() => navigate("Register")}>
            Register
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    width: constant.DEVICE_WIDTH - 40,
    height: 200 * ((constant.DEVICE_WIDTH - 40) / 499),
  },
  heading: {
    alignSelf: "center",
    fontSize: 24,
    marginVertical: 10,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
})
