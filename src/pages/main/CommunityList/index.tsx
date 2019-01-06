import { Button, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from "react-navigation"
import CommunityItem from "./CommunityItem"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

interface IState {
  communities: ICommunity[]
  isCommunitiesEmpty: boolean
}

export default class CommunityList extends Component<IProps, IState> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Your Communities",
  }

  public state = {
    communities: [] as ICommunity[],
    isCommunitiesEmpty: true,
  }

  public componentDidMount() {
    // TODO: Fetch community list
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.state.isCommunitiesEmpty ? (
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
          <FlatList
            data={["1", "2", "3"]}
            renderItem={() => <CommunityItem />}
            keyExtractor={(_item, index) => index.toString()}
          />
        )}
        {/* TODO: Remove when fetch data is implemented */}
        <TouchableOpacity
          onPress={() =>
            this.setState({
              isCommunitiesEmpty: !this.state.isCommunitiesEmpty,
            })
          }
          style={{
            backgroundColor: "rgb(31,144,230)",
            padding: 10,
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Switch</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  isCommunityEmptyViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
