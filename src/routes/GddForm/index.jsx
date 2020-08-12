import React from 'react'
import _ from 'lodash'
import styles from './index.module.scss'
import { Typography, Button, Card } from '@material-ui/core'
import { useSelector } from 'react-redux'
import QUESTIONS from './questions'
import Sidebar from './Sidebar'
import actions from 'store/actions'


export default function Home() {
  const questionIds = Object.keys(QUESTIONS)
  const { questionId, results } = useSelector(() => actions.get('gdd', {}))
  const { options = [] } = _.get(QUESTIONS, questionId, {})
  const completed = options.some((id) => _.get(results, id))

  React.useEffect(() => {
    if (!questionId) actions.set('gdd.questionId', _.first(questionIds))
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (!completed) {
      const firstId = _.first(options)
      actions.set(`gdd.results.${firstId}`, true)
    }
  }, [questionId]) // eslint-disable-line

  const filteredIds = questionIds.filter((id) => {
    const { requires } = _.get(QUESTIONS, id, {})
    return !requires || _.get(results, requires)
  })
  const questionIndex = filteredIds.indexOf(questionId)
  const lastId = _.get(filteredIds, questionIndex - 1)
  const afterIds = filteredIds.slice(questionIndex + 1)
  const nextId = _.first(afterIds)

  return (
    <div className={styles.gddForm}>
      <Sidebar />
      <Card
        style={{
          margin: 5,
          padding: 10
        }}
      >
        <Typography variant="h2">{questionId}</Typography>
        <div className={styles.options}>
          {options.map((id) => {
            const selected = _.get(results, id)
            return (
              <Button
                color={selected ? 'secondary' : undefined}
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
        </div>
        <div className={styles.actions}>
          <Button
            color="primary"
            disabled={!nextId || !completed}
            onClick={() => {
              actions.set('gdd.questionId', nextId)
              const allOptions = afterIds.reduce((acc, id) => {
                const { options = [] } = _.get(QUESTIONS, id, {})
                return [...acc, ...options]
              }, [])

              actions.set('gdd.results', _.omit(results, allOptions))
            }}
          >
            Next
          </Button>
          <Button
            color="primary"
            disabled={!lastId}
            onClick={() => {
              actions.set('gdd.questionId', lastId)
            }}
          >
            Back
          </Button>
        </div>
      </Card>

    </div>
  )
}