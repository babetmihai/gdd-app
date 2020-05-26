import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import { setQuestion } from 'core/gdd'
import { ListGroup } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormSidebar(props) {
  const { id, questions = {}, answers = {} } = props
  const lastId = _.last(Object.keys(answers))
  return (
    <ListGroup className={styles.formSidebar}>
      {Object.keys(questions)
        .map((_id) => {
          return (
            <ListGroup.Item
              key={_id}
              className={styles.item}
              active={_id === id}
              disabled={_.isEmpty(_.get(answers, _id)) && _id !== lastId}
              onClick={() => setQuestion(_id)}
            >
              {t(_id)}
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  )
}

