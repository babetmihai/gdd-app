import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from 'layout/Main'


const routes = [
]

export default function App() {
  return (
    <Main routes={routes}>
      <Switch>
        {routes.map((route) => {
          const { id, path, component, icon, exact } = route
          return (
            <Route
              key={id}
              exact={exact}
              path={path}
              render={(props) => React.createElement(component, {
                ...props,
                id,
                icon,
                routes
              })}
            />
          )
        })}
        <Redirect to="/" />
      </Switch>
    </Main>
  )
}
