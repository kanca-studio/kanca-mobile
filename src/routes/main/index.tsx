import { createStackNavigator } from "react-navigation"
import CommunityCreate from "../../pages/main/CommunityCreate"
import CommunityList from "../../pages/main/CommunityList"
import DetailCommunity from "../../pages/main/DetailCommunity"
import CreateEvent from "../../pages/main/CreateEvent"
import EventDetail from "../../pages/main/EventDetail"

export default createStackNavigator({
  CommunityList,
  CommunityCreate,
  DetailCommunity,
  CreateEvent,
  EventDetail,
})
