import { Button, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { View, StyleSheet, Image } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as firebase from "firebase"

import { login } from "../../../service/firebase"

import Logo from "../../../../assets/logo.png"
import constant from "../../../config/constants"
import InputItem from "../../../components/InputItem"

import UserContext from "../../../service/context/UserContext"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

interface IState {
  email: string
  password: string
  isLoggingIn: boolean
}

class Login extends Component<IProps, IState> {
  public state = {
    email: "",
    password: "",
    isLoggingIn: false,
  }

  public async onLoginPressed(ctx: IUserContext) {
    // TODO: Refactor to controller
    this.setState({ isLoggingIn: true })
    const { email, password } = this.state
    const loginStatus = await login(email, password)
    if (loginStatus) {
      const userToken = await firebase.auth().currentUser.getIdToken(true)
      ctx.setToken(userToken)
      this.props.navigation.navigate("CommunityList")
    }
    this.setState({ isLoggingIn: false })
  }

  public render() {
    const { navigate } = this.props.navigation
    return (
      <UserContext.Consumer>
        {(context) => (
          <View style={styles.container}>
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
              <Button
                type="primary"
                onPress={() => this.onLoginPressed(context)}
              >
                Login
              </Button>
              <WhiteSpace />
              <Button type="ghost" onPress={() => navigate("Register")}>
                Register
              </Button>
            </View>
          </View>
        )}
      </UserContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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

export default Login
