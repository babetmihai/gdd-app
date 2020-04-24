import React from 'react'
import { connect } from 'react-redux'
import { submitNode, filterOptions } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import styles from './index.module.scss'
import Select from './Select'
import Textarea from './Textarea'

function Questions(props) {
  React.useEffect(() => {
    actions.set({
      questions: data,
      answers: {},
      questionId: 'gameType'
    })
  }, [])

  const { questionId, questions, answers = {} } = props
  const { type, options = [], nextId } = _.get(questions, questionId, {})
  const filteredOptions = filterOptions({ options, questions, answers })

  const [value, onChange] = React.useState({})
  React.useEffect(() => {
    onChange(_.get(answers, questionId))
  }, [questionId]) // eslint-disable-line

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        {Object.keys(answers)
          .filter((id) => !_.isEmpty(_.get(answers, id)))
          .map((id) => {
            return (
              <div
                key={id}
                onClick={() => actions.set('questionId', id)}
              >
                {id}
              </div>
            )
          })}
      </div>
      <div className={styles.content}>
        <h4>{questionId}</h4>
        <form>
          {type === 'input'
            ? (
              <Textarea
                value={value}
                onChange={onChange}
              />
            )
            : (
              <Select
                options={filteredOptions}
                value={value}
                multiple
                onChange={onChange}
              />
            )
          }
          {nextId &&
            <button
              type="submit"
              disabled={_.isEmpty(value)}
              onClick={(event) => {
                event.preventDefault()
                onChange(undefined)
                submitNode({ id: questionId, value })
              }}
            >
              next
            </button>
          }
        </form>
      </div>
    </div>

  )
}

export default connect(() => actions.get())(Questions)
