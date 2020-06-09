import React from 'react'
import { useSelector } from 'react-redux'
import { selectGdd } from 'core/gdd'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import FormResolver from './FormResolver'
import FormSidebar from './FormSidebar'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'

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
    <div className={styles.questions}>
      <FormSidebar
        id={questionId}
        answers={answers}
        questions={questions}
      />
      <Form className={styles.form}>
        <FormResolver
          id={questionId}
          answer={answer}
          question={question}
        />
      </Form>

    </div>
  )
}
