import { Button, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { NavigationScreenProp, NavigationStackScreenOptions } from "react-navigation"
import CommunityItem from "./CommunityItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

interface IState {
  communities: Array<Community>
}

export default class CommunityList extends Component<IProps, IState> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "Your Communities"
  }

  state = {
    communities: [] as Array<Community>
  }

  public componentDidMount() {
    //TODO: Fetch community list
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.state.communities.length !== 0 ? (
          <View style={styles.isCommunityEmptyViewContainer}>
            <Text>You don't have any communities yet. Start one!</Text>
            <WhiteSpace />
            <Button
              type="primary"
              onPress={() => this.props.navigation.navigate("CommunityCreate")}
            >
              Create a Community
            </Button>
          </View>
        ) : (
          <CommunityItem />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  isCommunityEmptyViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
