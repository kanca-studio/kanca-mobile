import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"

interface IProps {
  title: string
  description: string
}

export default class PageTitle extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
  },
})
