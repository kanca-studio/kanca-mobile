import { createStackNavigator } from "react-navigation"
import Login from "../../pages/auth/Login"
import Welcome from "../../pages/auth/Welcome"
import SplashScreen from "../../pages/SplashScreen"

export default createStackNavigator({
  SplashScreen,
  Login,
  Welcome,
}, {
  headerMode: "none",
})
