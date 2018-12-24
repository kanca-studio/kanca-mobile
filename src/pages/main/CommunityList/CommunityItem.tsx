import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import constants from "../../../config/constants"

export default () => (
  <TouchableOpacity style={styles.container} onPress={() => alert("lala")}>
    <View style={styles.imageContainer}>
      <Image
        source={require("../../../../assets/FB.jpg")}
        resizeMode={"cover"}
        style={styles.image}
      />
    </View>
    <View style={{ marginTop: 140 }}>
      <Text style={{ fontSize: 18, color: "white" }}>
        Facebook Developer Circles: Malang
      </Text>
      <Text style={{ fontSize: 12, marginTop: 5, color: "white" }}>
        Malang, Jawa Timur
      </Text>
      <Text style={{ marginTop: 20, textAlign: "justify", fontSize: 13 }}>
        Welcome! This is a forum for developers in Malang and its surroundings who are
        interested in building on the Facebook platform to interact and collaborate other
        developers who share similar interests.
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: constants.DEVICE_WIDTH * 0.95,
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    shadowColor: "grey",
    backgroundColor: "white",
    minHeight: 250
  },
  image: {
    width: constants.DEVICE_WIDTH * 0.95,
    height: 200
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden"
  }
})
