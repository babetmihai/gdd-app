import React from 'react'
import { connect } from 'react-redux'
import { goToQuestion, answerQuestion, filterOptions } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import styles from './index.module.scss'
import FormInput from './FormInput'
import Answers from './Answers'
import Page from 'components/Page'
import { Button, Form } from 'react-bootstrap'

function Questions(props) {
  React.useEffect(() => {
    actions.set({
      questions: data,
      answers: {},
      questionId: 'gameType'
    })
  }, [])

  const { questionId, questions = {}, answers = {} } = props
  const { type, options = [], nextId } = _.get(questions, questionId, {})
  const filteredOptions = filterOptions({ options, questions, answers })
  const value = _.get(answers, questionId)

  return (
    <Page>
      <div className={styles.questions}>
        <Answers
          questions={questions}
          answers={answers}
          questionId={questionId}
        />
        <Form className={styles.form}>
          <FormInput
            id={questionId}
            type={type}
            options={filteredOptions}
            value={value}
            onChange={(value) => answerQuestion({ id: questionId, value })}
          />
          {nextId &&
            <Button
              size="lg"
              variant={_.isEmpty(value) ? 'outline-success' : 'success'}
              type="submit"
              disabled={_.isEmpty(value)}
              onClick={(event) => {
                event.preventDefault()
                goToQuestion(nextId)
              }}
            >
              Next
            </Button>
          }
        </Form>
      </div>
    </Page>
  )
}

export default connect(() => actions.get())(Questions)
