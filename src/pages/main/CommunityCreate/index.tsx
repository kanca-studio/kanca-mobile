import { Text, StyleSheet, ScrollView, View } from "react-native"
import { Button, WingBlank, WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import InputItem from "../../../components/InputItem"
import ImagePicker from "../../../components/ImagePicker"
import PageTitle from "../../../components/PageTitle"
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class CommunityCreate extends Component<IProps> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Create Community",
  }

  public render() {
    return (
      <WingBlank style={styles.container}>
        <WhiteSpace size="md" />
        <PageTitle
          title="Create Your Community"
          description="Make the world better with your community"
        />

        <WhiteSpace size="xl" />
        <ScrollView>
          <ImagePicker label="Pick Community Banner" />

          <InputItem label="Name" placeholder="ex: devc malang" />
          <InputItem
            multiline={true}
            label="Description"
            placeholder="your community description"
          />
          <InputItem label="Country" placeholder="ex: indonesia" />
          <InputItem label="City" placeholder="ex: malang" />
        </ScrollView>
        <WhiteSpace size="xl" />

        <Button
          style={styles.button}
          type="primary"
          onPress={() => this.props.navigation.navigate("DetailCommunity")}
        >
          Create Community
        </Button>
      </WingBlank>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignSelf: "stretch",
    marginHorizontal: -15,
    borderRadius: 0,
  },
})
