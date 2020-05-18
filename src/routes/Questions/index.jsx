import React from 'react'
import { connect } from 'react-redux'
import { answerQuestion, filterOptions, selectGdd, setQuestion } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import FormText from './FormText'
import FormSelect from './FormSelect'
import Answers from './Answers'
import { Button, Form, Card } from 'react-bootstrap'
import styles from './index.module.scss'
import { t } from 'core/intl'

function Questions(props) {
  React.useEffect(() => {
    actions.update('gdd', {
      questions: data,
      questionId: _.first(Object.keys(data))
    })
  }, [])

  const { questionId, questions = {}, answers = {} } = props
  const { type, options = [], nextId, parentId } = _.get(questions, questionId, {})
  const parentAnswers = parentId && Object.keys(_.get(answers, parentId, {}))

  const filteredOptions = filterOptions({ options, questions, answers })
  const value = _.get(answers, questionId)
  const lastId = Object.keys(questions)
    .find((_id) => _.get(questions, `${_id}.nextId`) === questionId)

  return (
    <Card className={styles.questions}>
      <Answers
        questions={questions}
        answers={answers}
        questionId={questionId}
      />
      <Form className={styles.form}>
        <h2>{t(questionId)}</h2>
        {parentId &&
          <h5>
            {t(
              'details_question',
              { parentAnswers },
              'What type of {parentAnswers} game?'
            )}
          </h5>
        }
        {type === 'input' &&
          <FormText
            id={questionId}
            value={value}
            onChange={(value) => answerQuestion({ id: questionId, value })}
          />
        }
        {options.length > 0 &&
          <FormSelect
            id={questionId}
            options={filteredOptions}
            value={value}
            multiple={type === 'multiple'}
            onChange={(value) => answerQuestion({ id: questionId, value })}
          />
        }
        <div className={styles.footer}>
          {lastId &&
            <Button
              tabIndex={-1}
              size="lg"
              variant={'outline-dark'}
              onClick={() => setQuestion(lastId)}
            >
              Back
            </Button>
          }
          {nextId &&
            <Button
              size="lg"
              variant={_.isEmpty(value) ? 'outline-success' : 'success'}
              type="submit"
              disabled={_.isEmpty(value)}
              onClick={(event) => {
                event.preventDefault()
                setQuestion(nextId)
              }}
            >
              Next
            </Button>
          }
        </div>
      </Form>
    </Card>
  )
}

export default connect(() => selectGdd())(Questions)
