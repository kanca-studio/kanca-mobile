import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Examples } from '@shoutem/ui'

export default class App extends React.Component {
  render() {
    return <Examples />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
