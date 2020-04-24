import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Questions from './Questions'

export default function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questions" component={Questions} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )
}
