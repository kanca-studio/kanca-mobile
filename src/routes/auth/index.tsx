import { createStackNavigator } from "react-navigation"
import Login from "../../pages/auth/Login"
import Register from "../../pages/auth/Register"
import Welcome from "../../pages/auth/Welcome"
import SplashScreen from "../../pages/SplashScreen"

export default createStackNavigator(
  {
    SplashScreen,
    Welcome,
    Login,
    Register,
  },
  {
    headerMode: "none",
  },
)
