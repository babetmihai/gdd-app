import React from 'react'
import _ from 'lodash'
import styles from './index.module.scss'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import QUESTIONS from './questions'
import actions from 'core/intl'

export default function Home() {
  const { id, results } = useSelector(() => actions.get('form', {}))
  const questionList = _.first(QUESTIONS)
  return (
    <div className={styles.dddForm}>
      <Typography variant="h2">Form</Typography>
    </div>
  )
}