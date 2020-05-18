import _ from 'lodash'
import actions from 'store/actions'
import history from 'core/history'

export const selectGdd = () => actions.get('gdd', {})

export const filterOptions = ({ options, questions, answers = {} }) => {
  return _.uniq(options)
    .filter((id) => {
      const { excludes, requires } = _.get(questions, id, {})
      return (
        (!excludes || excludes.every((_id) => !isSelected(_id, answers))) &&
        (!requires || requires.every((_id) => isSelected(_id, answers)))
      )
    })
}

const isSelected = (id, answers) => Object.values(answers)
  .some((value) => _.get(value, id))

export const answerQuestion = ({ id, value }) => {
  const { questions, answers } = selectGdd()
  const { nextId } = _.get(questions, id, {})

  actions.set(`gdd.answers.${id}`, value)
  if (!_.isEqual(_.get(answers, id), value)) {
    deleteAnswers(nextId)
  }
}

export const setQuestion = (id) => {
  actions.set('gdd.questionId', id)
  if (id === 'done') history.push('/result')
}

const deleteAnswers = (id) => {
  const { questions, answers } = selectGdd()
  const { nextId } = _.get(questions, id, {})

  if (answers[id]) {
    setQuestion(id)
    if (nextId) deleteAnswers(nextId)
  }
}

