import React from 'react'
import { useSelector } from 'react-redux'
import { selectGdd } from 'core/gdd'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import FormResolver from './FormResolver'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Questions() {
  React.useEffect(() => {
    actions.update('gdd', {
      questions: data,
      questionId: _.first(Object.keys(data))
    })
  }, [])

  const gddModule = useSelector(() => selectGdd())
  const { questionId, questions = {}, answers = {} } = gddModule
  const question = _.get(questions, questionId, {})
  const answer = _.get(answers, questionId, {})

  return (
    <Card className={styles.questions}>
      <FormResolver
        id={questionId}
        answer={answer}
        question={question}
      />
    </Card>
  )
}
