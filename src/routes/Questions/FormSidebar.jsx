import React, { Fragment } from 'react'
import _ from 'lodash'
import join from 'classnames'
import { t } from 'core/intl'
import { setQuestion, TYPES, flattenAnswers } from 'core/gdd'
import styles from './index.module.scss'

export default function FormSidebar(props) {
  const { id, questions = {}, answers = {} } = props
  const flatAnswers = flattenAnswers(answers)
  const lastId = _.last(Object.keys(answers))
  return (
    <div className={styles.formSidebar}>
      {Object.values(questions)
        .filter(({ id: questionId, type }) => (
          TYPES.DONE !== type &&
          !Object.values(questions)
            .some(({ options = [] }) => options.includes(questionId))
        ))
        .map(({ id: questionId, options = [] }) => {
          const active = questionId === id
          const disabled = _.isEmpty(_.get(answers, questionId)) &&
            questionId !== lastId &&
            questionId !== id
          return (
            <Fragment key={questionId}>
              <div
                onClick={() => setQuestion(questionId)}
                className={join(
                  styles.item,
                  active && styles.active,
                  disabled && styles.disabled
                )}
              >
                {t(questionId)}
              </div>
              {options
                .filter((optionId) => questions[optionId] && flatAnswers[optionId])
                .map((optionId) => {
                  const active = optionId === id
                  const disabled = _.isEmpty(_.get(answers, optionId)) &&
                      optionId !== lastId &&
                      optionId !== id
                  return (
                    <div
                      key={optionId}
                      onClick={() => setQuestion(optionId)}
                      className={join(
                        styles.item,
                        styles.child,
                        active && styles.active,
                        disabled && styles.disabled
                      )}
                    >
                      {t(optionId)}
                    </div>
                  )
                })}
            </Fragment>
          )
        })}
    </div>
  )
}
