import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'routes/Home'
import GddForm from 'routes/GddForm'
import Layout from 'core/layout/Layout'
import Results from 'routes/Results'


export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={GddForm} />
        <Route path="/results" component={Results} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}
