import { createStackNavigator } from "react-navigation"
import Login from "../../pages/auth/Login"
import Register from "../../pages/auth/Register"
import Welcome from "../../pages/auth/Welcome"

export default createStackNavigator(
  {
    Welcome,
    Login,
    Register,
  },
  {
    headerMode: "none",
  },
)
