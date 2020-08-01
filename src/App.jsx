import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'routes/Home'
import Form from 'routes/Form'
import Layout from 'core/layout/Layout'


const routes = [
  { path: '/', component: Home },
  { path: '/form', component: Form }
]

export default function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            key={path}
            exact
            path={path}
            component={component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}
