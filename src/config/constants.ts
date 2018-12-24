import { Dimensions, Platform } from "react-native"

// Get the screen dimensions
const { width, height } = Dimensions.get("window")

export default {
  OS: Platform.OS,
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height
}
