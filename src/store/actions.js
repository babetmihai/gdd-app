import get from 'lodash/get'
import { STORE_SET, STORE_UPDATE, STORE_DELETE } from './constants'
import store from 'store'

const join = (...paths) => paths
  .filter((key = '') => key.length > 0)
  .join('.')

const parse = (args) => {
  if (args.length === 0) return {}
  if (args.length === 1) return { payload: args[0], type: '' }
  return { type: args[0], payload: args[1] }
}

export default {
  get: (type, defautValue) => {
    if (!type) return store.getState()
    return get(store.getState(), type, defautValue)
  },
  set: (...args) => {
    const { type, payload } = parse(args)
    store.dispatch({
      type,
      payload,
      method: STORE_SET
    })
  },
  update: (...args) => {
    const { type, payload } = parse(args)
    store.dispatch({
      type,
      payload,
      method: STORE_UPDATE
    })
  },
  delete: (type) => store.dispatch({
    type,
    method: STORE_DELETE
  })
}