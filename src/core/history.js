import { createHashHistory } from 'history'
import _ from 'lodash'

const history = createHashHistory()

export const getParams = (props) => {
  return _.get(props, 'match.params', {})
}

export default history