import React from 'react'
import _ from 'lodash'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { useSelector } from 'react-redux'
import QUESTIONS from '../questions'
import actions from 'store/actions'

import styles from './index.module.scss'

export default function Sidebar() {
  const questionIds = Object.keys(QUESTIONS)
  const { results } = useSelector(() => actions.get('gdd', {}))
  const filteredIds = questionIds.filter((id) => {
    const { requires } = _.get(QUESTIONS, id, {})
    return !requires || _.get(results, requires)
  })

  return (
    <div className={styles.sidebar}>
      <div className={styles.top} />
      <Divider />
      <List className={styles.list}>
        {filteredIds.map((id) => {
          const isFirst = _.first(filteredIds) === id
          const hasResults = _.get(QUESTIONS, `${id}.options`, []).some((optionId) => _.get(results, optionId))

          return (
            <ListItem
              button
              key={id}
              disabled={!isFirst && !hasResults}
              onClick={() => actions.set('gdd.questionId', id)}
            >
              <ListItemText primary={id} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}