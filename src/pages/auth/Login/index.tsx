import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { NavigationScreenProp } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class Login extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          type='primary'
          onPress={() => this.props.navigation.navigate('CommunityList')}>
          Go To Community List
        </Button>
      </View>
    )
  }
}
