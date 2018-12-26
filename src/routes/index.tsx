import { createAppContainer, createSwitchNavigator } from "react-navigation"
import SplashScreen from "../pages/SplashScreen"
import authRoutes from "./auth"
import mainRoutes from "./main"

export default createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    authRoutes,
    mainRoutes,
  }),
)
