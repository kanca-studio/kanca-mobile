import React, { Component } from "react";
import { Button } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import styles from "./styles";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class EventDetail extends Component<IProps> {
  render() {
    return (
      <View>
        <Text> Event Detail </Text>
        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate("CommunityList")}
        >
          Go To Community List
        </Button>
      </View>
    );
  }
}
