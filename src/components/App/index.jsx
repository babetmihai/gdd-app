import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Page from 'components/Page'
import Home from './Home'
import Questions from './Questions'

export default function App() {
  return (
    <>
      <div>
        <Suspense fallback={<Page loading />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/questions/:nodeId" component={Questions} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </>
  )
}
