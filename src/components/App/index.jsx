import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Modals from 'core/modals/components/Modals'
import Home from './Home'
import Questions from './Questions'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Redirect to="/" />
      </Switch>
      <Modals />
    </>
  )
}
