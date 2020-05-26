import React from 'react'
import { useSelector } from 'react-redux'
import { selectGdd } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import FormResolver from './FormResolver'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Questions() {
  React.useEffect(() => {
    actions.update('gdd', {
      answers: {},
      questions: data,
      questionId: _.first(Object.keys(data))
    })
  }, [])

  const gddModule = useSelector(() => selectGdd())
  const { questionId, questions = {}, answers = {} } = gddModule
  const question = _.get(questions, questionId, {})
  const { type, options = [] } = question

  return (
    <Card className={styles.questions}>
      <FormResolver
        id={questionId}
        answers={answers}
        type={type}
        options={options}
      />
    </Card>
  )
}
