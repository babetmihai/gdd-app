
import setWith from 'lodash/fp/setWith'
import unset from 'lodash/fp/unset'
import updateWith from 'lodash/fp/updateWith'
import isFunction from 'lodash/isFunction'
import isNil from 'lodash/isNil'
import { STORE_SET, STORE_UPDATE, STORE_DELETE } from './constants'

export default (state = {}, action = {}) => {
  const { method, type, payload } = action
  switch (method) {
    case (STORE_SET):
      switch (true) {
        case (!type): return payload
        case (isNil(payload)): return unset(type, state)
        default: return setWith(Object, type, payload, state)
      }
    case (STORE_UPDATE):
      switch (true) {
        case (!type && isFunction(payload)): return payload(state)
        case (!type): return { ...state, ...payload }
        case (isFunction(payload)): return updateWith(Object, type, payload, state)
        default: return updateWith(Object, type, (value) => ({ ...value, ...payload }), state)
      }
    case (STORE_DELETE):
      if (!type) return {}
      return unset(type, state)
    default: return state
  }
}