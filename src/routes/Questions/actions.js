import _ from 'lodash'
import actions from 'store/actions'

export const TYPES = {
  INPUT: 'INPUT',
  MULTIPLE: 'MULTIPLE',
  DONE: 'DONE'
}

export const selectGdd = () => actions.get('gdd', {})

export const submitAnswers = ({ id, value }) => {
  actions.update('gdd.answers', value)
  const { questions, answers } = selectGdd()
  const filteredQuestions = filterQuestions({ questions, answers })
  const nextQuestion = filteredQuestions.find((q, index) => {
    const { id: lastId } = filteredQuestions[index - 1] || {}
    if (lastId === id) return true
    else return false
  })
  actions.set('gdd.questionId', nextQuestion.id)
}

export const filterQuestions = ({ questions, answers }) => {
  return Object.values(questions)
    .filter(({ requires }) => !requires || requires.some((_id) => answers[_id]))
}