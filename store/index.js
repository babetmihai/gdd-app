import { createStore } from 'redux'
import _ from 'lodash'
import reducer from './reducer'


const PERSISTENT_PATHS = [
  { path: 'decisions', defaultValue: {} }
]

const state = {}
PERSISTENT_PATHS.forEach(({ path, defaultValue }) => {
  try {
    const value = JSON.parse(localStorage.getItem(path)) || defaultValue
    _.setWith(state, path, value, Object)
  } catch (error) {
    console.error(error)
  }
})

const store = createStore(
  reducer,
  state,
  (global.__REDUX_DEVTOOLS_EXTENSION__)
    ? global.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

store.subscribe(_.debounce(() => {
  const state = store.getState()
  PERSISTENT_PATHS.forEach(({ path }) => {
    const value = _.get(state, path)
    localStorage.setItem(path, JSON.stringify(value))
  })
}, 700, { trailing: true }))

export default store