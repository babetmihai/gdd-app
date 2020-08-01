import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'routes/Home'


const routes = [
  { id: 'home', path: '/', component: Home }
]

export default function App() {
  return (
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
  )
}
