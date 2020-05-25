import _ from 'lodash'
import actions from 'store/actions'

export const TYPES = {
  INPUT: 'INPUT',
  MULTIPLE: 'MULTIPLE'
}

export const selectGdd = () => actions.get('gdd', {})

export const submitQuestion = ({ id, value }) => actions.update('gdd.answers', value)

export const setQuestion = (id) => actions.set('gdd.questionId', id)
