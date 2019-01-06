import React, { Component } from "react"
import AppRoutes from "./routes"

import { init } from "./service/firebase"

export default class App extends Component {
  public componentDidMount() {
    init()
  }

  public render() {
    return <AppRoutes />
  }
}
