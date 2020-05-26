import actions from 'store/actions'
import _ from 'lodash'
import history from './history'


export const TYPES = {
  INPUT: 'INPUT',
  MULTIPLE: 'MULTIPLE',
  DONE: 'DONE'
}

export const selectGdd = () => actions.get('gdd', {})
export const setQuestion = (id) => actions.set('gdd.questionId', id)

export const submitForm = () => {
  history.push('/result')
}


export const submitAnswers = ({ id, value }) => {
  const { answers = {} } = selectGdd()
  if (!_.isEqual(_.get(answers, id), value)) {
    let done
    const _answers = Object.keys(answers).reduce((acc, key) => {
      if (key === id) done = true
      if (!done) acc[key] = answers[key]
      return acc
    }, {})
    _answers[id] = value
    actions.set('gdd.answers', _answers)
  }

  const nextId = getNextId(id)
  setQuestion(nextId)
}


const getNextId = (id) => {
  const { questions, answers } = selectGdd()
  const filteredQuestions = filterQuestions({ questions, answers })
  let previousId
  const nextQuestion = filteredQuestions.find(({ id: _id }) => {
    if (previousId === id) return true
    previousId = _id
    return false
  })
  return nextQuestion.id
}


export const flattenAnswers = (answers) => Object.values(answers)
  .map((answer) => Object.entries(answer))
  .flat()
  .filter(([key, value]) => value)
  .reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})


const filterQuestions = ({ questions, answers }) => {
  const flatAnswers = flattenAnswers(answers)
  return Object.values(questions)
    .filter(({ requires }) => !requires || requires.some((_id) => flatAnswers[_id]))
}
