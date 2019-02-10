import React, { Component, ReactElement, cloneElement } from "react"
import { TextInputProps, StyleSheet, View, Text, TextInput } from "react-native"

interface IProps extends TextInputProps {
  label?: string
  placeholder: string
  icon?: ReactElement<any>
}

interface IState {
  isFocused: boolean
}

export default class InputItem extends Component<IProps, IState> {
  public state = {
    isFocused: false,
  }

  public render() {
    const props = this.props
    const Icon = props.icon
    return (
      <View style={styles.container}>
        {!!!props.icon && (
          <View style={styles.labelContainer}>
            <Text>{props.label}</Text>
          </View>
        )}
        <View
          style={[
            styles.inputContainer,
            { borderColor: this.state.isFocused ? "rgb(31,144,230)" : "grey" },
          ]}
        >
          {!!props.icon && (
            <View style={styles.iconContainer}>
              {cloneElement(Icon, {
                color: this.state.isFocused ? "rgb(31,144,230)" : "grey",
              })}
            </View>
          )}
          <TextInput
            {...props}
            style={styles.input}
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
    width: "100%",
    minHeight: 50,
    marginBottom: 10,
  },
  iconContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  labelContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
  },
})
