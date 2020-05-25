import React from 'react'
import { useSelector } from 'react-redux'
import { selectGdd, submitQuestion } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import FormResolver from './FormResolver'
import { Button, Card } from 'react-bootstrap'
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
  const { type, options = [] } = question

  const [value, onChange] = React.useState()
  React.useEffect(() => {
    onChange(answers)
  }, [questionId]) // eslint-disable-line

  return (
    <Card className={styles.questions}>
      <FormResolver
        id={questionId}
        onChange={onChange}
        value={value}
        type={type}
        options={options}
      />
      <div className={styles.footer}>
        <Button
          size="lg"
          variant={_.isEmpty(value) ? 'outline-success' : 'success'}
          type="submit"
          disabled={_.isEmpty(value)}
          onClick={() => submitQuestion({ id: questionId, value })}
        >
          Next
        </Button>
      </div>
    </Card>
  )
}
