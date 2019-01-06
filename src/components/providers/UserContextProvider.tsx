import React, { Component } from "react"

import UserContext from "../../service/context/UserContext"

interface IState {
  token: string
}

export default class UserContextProvider extends Component<{}, IState> {
  public state = {
    token: "",
  }

  public setToken = (token: string) => {
    this.setState({ token })
    console.log("Set token", this.state.token)
  }

  public render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, setToken: this.setToken.bind(this) }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
