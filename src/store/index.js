import { createStore } from 'redux'
import _ from 'lodash'
import reducer from './reducer'


const PERSISTENT_PATHS = ['intl.locale']

const state = {}
PERSISTENT_PATHS.forEach((path) => {
  try {
    const value = JSON.parse(localStorage.getItem(path))
    _.setWith(state, path, value, Object)
  } catch (error) {
    console.error(error.message) // eslint-disable-line
  }
})

const store = createStore(
  reducer,
  state,
  (global.__REDUX_DEVTOOLS_EXTENSION__)
    ? global.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

const saveState = _.debounce(() => {
  const state = store.getState()
  PERSISTENT_PATHS.forEach((path) => {
    const value = _.get(state, path)
    localStorage.setItem(path, JSON.stringify(value))
  })
}, 700, { trailing: true })

store.subscribe(saveState)

export default store