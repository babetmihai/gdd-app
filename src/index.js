import 'index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'components/App'
import store from 'store'
import { initLocale } from 'core/intl'
import history from 'core/history'
import * as serviceWorker from './serviceWorker'

Promise.resolve()
  .then(() => initLocale())
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <App />
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
