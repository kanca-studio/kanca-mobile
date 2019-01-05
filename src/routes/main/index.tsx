import { createStackNavigator } from "react-navigation";
import CommunityCreate from "../../pages/main/CommunityCreate";
import CommunityList from "../../pages/main/CommunityList";
import EventDetail from "../../pages/main/EventDetail/";

export default createStackNavigator({
  CommunityList,
  CommunityCreate,
  EventDetail
});
