import React from 'react'
import _ from 'lodash'
import styles from './index.module.scss'
import { Typography, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import QUESTIONS from './questions'
import actions from 'core/intl'

export default function Home() {
  const questionIds = Object.keys(QUESTIONS)
  const { questionId, results } = useSelector(() => actions.get('gdd', {}))
  const { options = [] } = _.get(QUESTIONS, questionId, {})

  React.useEffect(() => {
    if (!questionId) actions.set('gdd.questionId', _.first(questionIds))
  }, []) // eslint-disable-line

  return (
    <div className={styles.dddForm}>
      <Typography variant="h2">Form</Typography>
      {options.map((id) => {
        const selected = _.get(results, id)
        return (
          <Button
            color={selected ? 'secondary' : 'primary'}
            key={id}
            variant="outlined"
            onClick={() => {
              actions.update(`gdd.results.${id}`, (toggle) => !toggle)
            }}
          >
            {id}
          </Button>
        )
      })}
      <Button
        color="primary"
        disabled={!options.some((id) => _.get(results, id))}
        onClick={() => {
          let afterCurrent
          for (const id of questionIds) {
            if (id === questionId) {
              afterCurrent = true
            } else {
              const { parentId } = _.get(QUESTIONS, id, {})
              const enabled = !parentId || _.get(results, parentId)
              if (afterCurrent && enabled) {
                actions.set('gdd.questionId', id)
                break
              }
            }
          }
        }}
      >
        Next
      </Button>
    </div>
  )
}