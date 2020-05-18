import 'index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from 'routes/Home'
import Questions from 'routes/Questions'
import store from 'store'
import { initLocale } from 'core/intl'
import history from 'core/history'
import * as serviceWorker from './serviceWorker'
import Result from 'routes/Result'

Promise.resolve()
  .then(() => initLocale())
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <div className={styles.page}>
              <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                  GDD Generator
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/questions">Questions</Nav.Link>
                  <Nav.Link as={Link} to="/result">Results</Nav.Link>
                </Nav>
              </Navbar >
              <div className={styles.content}>
                <div className={styles.children}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/questions" component={Questions} />
                    <Route exact path="/result" component={Result} />
                    <Redirect to="/" />
                  </Switch>
                </div >
              </div>
            </div>
          </Router>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
