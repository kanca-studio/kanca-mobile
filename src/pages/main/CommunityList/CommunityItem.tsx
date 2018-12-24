import { Card } from "@ant-design/react-native"
import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

export default () => (
  <TouchableOpacity>
    <Card>
      <Card.Header />
      <Card.Body>
        <Image
          source={require("../../../../assets/FB.jpg")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Text>DevC Malang</Text>
      </Card.Body>
    </Card>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100
  }
})
