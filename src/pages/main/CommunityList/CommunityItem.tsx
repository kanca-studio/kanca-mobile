import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native"
import constants from "../../../config/constants"

interface IProps {
  name: string
  location: string
  description: string
  image: ImageSourcePropType
  onPress: () => void
}

export default class CommunityItem extends Component<IProps> {
  public render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={this.props.image}
            resizeMode={"cover"}
            style={styles.image}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.location}>{this.props.location}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: constants.DEVICE_WIDTH * 0.95,
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    shadowColor: "grey",
    backgroundColor: "white",
    minHeight: 250,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: constants.DEVICE_WIDTH * 0.95,
    height: 200,
  },
  detailContainer: {
    marginTop: 140,
  },
  name: {
    fontSize: 18,
    color: "white",
  },
  location: {
    fontSize: 12,
    marginTop: 5,
    color: "white",
  },
  description: {
    marginTop: 20,
    textAlign: "justify",
    fontSize: 13,
  },
})
