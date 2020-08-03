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

  const filteredIds = questionIds.filter((id) => {
    const { requires } = _.get(QUESTIONS, id, {})
    return !requires || _.get(results, requires)
  })

  return (
    <div className={styles.gddForm}>
      <Typography variant="h2">Form</Typography>
      {options.map((id) => {
        const selected = _.get(results, id)
        return (
          <Button
            color={selected ? 'secondary' : 'primary'}
            size="large"
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
          const questionIdex = filteredIds.indexOf(questionId)
          const afterIds = filteredIds.slice(questionIdex + 1)
          const nextId = _.first(afterIds)

          if (nextId) actions.set('gdd.questionId', nextId)
          const allOptions = afterIds.reduce((acc, id) => {
            const { options = [] } = _.get(QUESTIONS, id, {})
            return [...acc, ...options]
          }, [])
          console.log(allOptions)
          actions.set('gdd.results', _.omit(results, ...allOptions))
        }}
      >
        Next
      </Button>
      <Button
        color="primary"
        onClick={() => {
          let lastId
          for (const id of filteredIds) {
            if (lastId && id === questionId) {
              actions.set('gdd.questionId', lastId)
              break
            } else {
              lastId = id
            }
          }
        }}
      >
        Back
      </Button>
    </div>
  )
}