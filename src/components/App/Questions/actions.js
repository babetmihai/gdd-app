import _ from 'lodash'
import actions from 'store/actions'

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
  const { questions, answers } = actions.get()
  const { nextId } = _.get(questions, id, {})

  actions.set(`answers.${id}`, value)
  if (!_.isEqual(answers[id], value)) {
    deleteAnswers(nextId)
  }
}

const deleteAnswers = (id) => {
  const { questions, answers } = actions.get()
  const { nextId } = _.get(questions, id, {})

  if (answers[id]) {
    actions.unset(`answers.${id}`)
    if (nextId) deleteAnswers(nextId)
  }
}

export const goToQuestion = (id) => {
  const { questions, answers } = actions.get()
  const { type, options = [], nextId } = _.get(questions, id, {})
  const filteredOptions = filterOptions({ options, questions, answers })

  if (nextId && type !== 'input' && filteredOptions.length <= 1) {
    const value = filteredOptions.reduce((acc, id) => ({ ...acc, [id]: true }), {})
    actions.set(`answers.${id}`, value)
    goToQuestion(nextId)
  } else {
    actions.set('questionId', id)
  }
}

