import React from 'react'
import { connect } from 'react-redux'
import { submitNode, filterOptions } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import styles from './index.module.scss'
import Select from './Select'
import Textarea from './Textarea'
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

  const [value, onChange] = React.useState({})
  React.useEffect(() => {
    onChange(_.get(answers, questionId))
  }, [questionId]) // eslint-disable-line

  return (
    <Page>
      <div className={styles.questions}>
        <Answers
          questions={questions}
          answers={answers}
          questionId={questionId}
        />
        <Form className={styles.form}>
          <h2>{questionId}</h2>
          {renderInput({
            type,
            options: filteredOptions,
            value,
            onChange
          })}
          {nextId &&
            <Button
              size="lg"
              variant={_.isEmpty(value) ? 'outline-success' : 'success'}
              type="submit"
              disabled={_.isEmpty(value)}
              onClick={(event) => {
                event.preventDefault()
                onChange(undefined)
                submitNode({ id: questionId, value })
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

const renderInput = ({ type, options, value, onChange }) => {
  switch (true) {
    case (type === 'input'): {
      return (
        <Textarea
          value={value}
          onChange={onChange}
        />
      )
    }
    case (options.length > 0): {
      return (
        <Select
          options={options}
          value={value}
          multiple={type === 'multiple'}
          onChange={onChange}
        />
      )
    }
    default: return null
  }
}

export default connect(() => actions.get())(Questions)
