
import { createStackNavigator } from "react-navigation"
import CommunityCreate from "../../pages/main/CommunityCreate"
import CommunityList from "../../pages/main/CommunityList"
import DetailCommunity from "../../pages/main/DetailCommunity"

export default createStackNavigator({
  CommunityList,
  CommunityCreate,
  DetailCommunity,
})

