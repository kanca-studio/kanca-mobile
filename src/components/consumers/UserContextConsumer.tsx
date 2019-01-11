import React from "react"
import UserContext from "../../service/context/UserContext"
import hoist from "hoist-non-react-statics"

const UserContextConsumer = <P extends object>(
  Component: React.ComponentType<P>,
) =>
  hoist(
    (props: any) => (
      <UserContext.Consumer>
        {(context) => <Component {...props} user={context} />}
      </UserContext.Consumer>
    ),
    Component,
  )

export default UserContextConsumer
