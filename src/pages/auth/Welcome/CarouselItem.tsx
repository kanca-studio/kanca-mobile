import { WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native"

interface IProps {
  title: string
  description: string
  imageSource: ImageSourcePropType
}

export default class CarouselItem extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={this.props.imageSource}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <WhiteSpace />
          <WhiteSpace />
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <WhiteSpace />
          <WhiteSpace />
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#6080f9",
    fontSize: 36,
    textAlign: "center",
  },
  description: {
    color: "#545454",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
  },
})
