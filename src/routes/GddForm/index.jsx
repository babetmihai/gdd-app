import React from 'react'
import _ from 'lodash'
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'
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
    <div
      style={{
        height: '90vh',
        maxHeight: 400,
        display: 'flex'
      }}
    >
      <Sidebar />
      <Card
        style={{
          margin: 5,
          display: 'flex',
          flexDirection: 'column',
          width: '50vw',
          maxWidth: 600
        }}
      >
        <CardContent
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{ margin: 4 }}
          >
            {questionId}
          </Typography>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}
          >
            {options.map((id) => {
              const selected = _.get(results, id)
              return (
                <Button
                  style={{
                    margin: 4,
                    fontSize: 18
                  }}
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
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button
            style={{ margin: 4 }}
            color="primary"
            disabled={!lastId}
            onClick={() => {
              actions.set('gdd.questionId', lastId)
            }}
          >
            Back
          </Button>
          <Button
            style={{ margin: 4 }}
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
        </CardActions>
      </Card>
    </div>
  )
}