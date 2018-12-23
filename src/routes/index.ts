import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import authRoutes from './auth'
import mainRoutes from './main'

export default createAppContainer(
  createSwitchNavigator({
    authRoutes,
    mainRoutes
  })
)
