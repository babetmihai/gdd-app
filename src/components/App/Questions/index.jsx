import React from 'react'
import { connect } from 'react-redux'
import { submitNode, filterOptions } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import styles from './index.module.scss'
import Select from './Select'
import Textarea from './Textarea'
import Page from 'components/Page'
import { Button, Form, ListGroup } from 'react-bootstrap'

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
    <Page
      sidebar={
        <ListGroup className={styles.answers}>
          {Object.keys(questions)
            .filter((id) => _.get(questions, `${id}.nextId`))
            .map((id) => {
              return (
                <ListGroup.Item
                  key={id}
                  active={id === questionId}
                  disabled={_.isEmpty(_.get(answers, id))}
                  onClick={() => actions.set('questionId', id)}
                >
                  {id}
                </ListGroup.Item>
              )
            })}
        </ListGroup>
      }
    >
      <Form className={styles.questions}>
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
