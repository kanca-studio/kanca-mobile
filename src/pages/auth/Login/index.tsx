import { Button, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { View, StyleSheet, Image, Alert } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as firebase from "firebase"

import { login } from "../../../service/firebase"

import Logo from "../../../../assets/logo.png"
import constant from "../../../config/constants"
import InputItem from "../../../components/InputItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

interface IState {
  email: string
  password: string
  isLoggingIn: boolean
}

export default class Login extends Component<IProps, IState> {
  public state = {
    email: "",
    password: "",
    isLoggingIn: false,
  }

  public async onLoginPressed() {
    this.setState({ isLoggingIn: true })
    const { email, password } = this.state
    const loginStatus = await login(email, password)
    if (loginStatus) {
      this.props.navigation.navigate("CommunityList")
    }
    const userToken = await firebase.auth().currentUser.getIdToken(true)
  }

  public render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.form}>
          <InputItem
            icon={<MaterialCommunityIcons name="email" size={32} />}
            placeholder="Your email address"
            onChangeText={(value) => this.setState({ email: value })}
          />
          <InputItem
            secureTextEntry
            icon={<MaterialCommunityIcons name="lock" size={32} />}
            placeholder="Your password"
            onChangeText={(value) => this.setState({ password: value })}
          />
          <Button type="primary" onPress={() => this.onLoginPressed()}>
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
