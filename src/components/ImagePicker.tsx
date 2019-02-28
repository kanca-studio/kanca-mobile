import React, { Component } from "react"
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { ImagePicker } from "expo"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface IState {
  image?: string
}

interface IProps {
  label: string
}

export default class CustomImagePicker extends Component<IProps, IState> {
  public state: IState = {
    image: null,
  }

  public setImage(result: ImagePicker.ImageResult) {
    if (result.cancelled === false) {
      this.setState({ image: result.uri })
    }
  }

  public openImagePicker() {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 2],
    }).then((result) => this.setImage(result))
  }

  public render() {
    return this.state.image ? (
      <TouchableOpacity onPress={() => this.openImagePicker()}>
        <Image source={{ uri: this.state.image }} style={styles.image} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => this.openImagePicker()}
        style={styles.imagePicker}
      >
        <MaterialCommunityIcons name="image" size={32} />
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imagePicker: {
    aspectRatio: 3 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 5,
  },
  image: {
    aspectRatio: 3 / 2,
  },
})
