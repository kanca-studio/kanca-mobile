import React, { Component } from "react"
import AppRoutes from "./routes"

import { init } from "./service/firebase"

// Provider
import UserContextProvider from "./components/providers/UserContextProvider"

export default class App extends Component {
  public componentDidMount() {
    init()
  }

  public render() {
    return (
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    )
  }
}
