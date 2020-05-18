import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import { setQuestion } from '../actions'
import { ListGroup } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Answers(props) {
  const { questionId, questions = {}, answers = {} } = props
  const lastId = _.last(Object.keys(answers))
  return (

    <ListGroup className={styles.answers}>
      {Object.keys(questions)
        .filter((id) => _.get(questions, `${id}.nextId`))
        .map((id) => {
          return (
            <ListGroup.Item
              key={id}
              className={styles.item}
              active={id === questionId}
              disabled={_.isEmpty(_.get(answers, id)) && id !== lastId}
              onClick={() => setQuestion(id)}
            >
              {t(id)}
            </ListGroup.Item>
          )
        })}
    </ListGroup>

  )
}

