import { Button, Carousel } from "@ant-design/react-native";
import React, { Component } from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CarouselItem from "./CarouselItem";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Welcome extends Component<IProps> {
  public gotoLogin() {
    this.props.navigation.navigate("Login");
  }

  public render() {
    return (
      <View>
        <Carousel>
          <CarouselItem
            imageSource={require("../../../../assets/welcome-image-1.png")}
            title="Your Title Here"
            description="This is description of your item"
          />
          <CarouselItem
            imageSource={require("../../../../assets/welcome-image-1.png")}
            title="Your Title Here"
            description="This is description of your item"
          >
            <Button type="ghost" onPress={() => this.gotoLogin()}>
              Continue
            </Button>
          </CarouselItem>
        </Carousel>
      </View>
    );
  }
}
