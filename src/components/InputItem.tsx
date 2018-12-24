import React, { Component } from "react"
import { TextInputProps, StyleSheet, View, Text, TextInput } from "react-native"
import constants from "../config/constants"

interface IProps extends TextInputProps {
  label: string
  placeholder: string
}

interface IState {
  isFocused: boolean
}

export default class InputItem extends Component<IProps, IState> {
  state = {
    isFocused: false
  }

  render() {
    const props = this.props
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text>{props.label}</Text>
        </View>
        <View
          style={[
            styles.inputContainer,
            { borderColor: this.state.isFocused ? "rgb(31,144,230)" : "grey" }
          ]}
        >
          <TextInput
            {...props}
            underlineColorAndroid={"transparent"}
            placeholder={props.placeholder}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: constants.DEVICE_WIDTH * 0.95,
    height: 50,
    padding: 10,
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
    alignItems: "center"
  },

  labelContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10
  },

  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    flex: 4,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center"
  }
})
