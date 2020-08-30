import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'routes/Home'
import QuestionsPage from 'routes/QuestionsPage'
import Layout from 'core/layout/Layout'
import ResultsPage from 'routes/ResultsPage'


export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={QuestionsPage} />
        <Route path="/results" component={ResultsPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}
