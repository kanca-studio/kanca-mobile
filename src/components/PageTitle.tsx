import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"

interface IProps {
  title: string
  description: string
}

export default class PageTitle extends Component<IProps> {
  public render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: { fontSize: 30 },
})
