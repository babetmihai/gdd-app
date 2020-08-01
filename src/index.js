import 'index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import * as serviceWorker from 'core/serviceWorker'
import { getRedirectResult } from 'core/auth'
import store from 'store'
import { initLocale } from 'core/intl'
import history from 'core/history'
import { create } from 'jss'
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'
import App from './App'
import styles from './constants.module.scss'

const styleNode = document.createComment('jss-insertion-point')
document.head.insertBefore(styleNode, document.head.firstChild)

const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point'
})

let theme = createMuiTheme({
  palette: {
    primary: {
      main: styles.primary
    },
    secondary: {
      main: styles.secondary
    }
  }
})
theme = responsiveFontSizes(theme)


Promise.resolve()
  .then(() => initLocale())
  .then(() => getRedirectResult())
  .then(() => {
    ReactDOM.render((
      <React.StrictMode>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Router history={history}>
                <App />
              </Router>
            </Provider>
          </ThemeProvider>
        </StylesProvider>

      </React.StrictMode>
    ), document.getElementById('root'))
  })

serviceWorker.unregister()
