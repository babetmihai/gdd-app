import React from 'react'
import _ from 'lodash'
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'
import ExtensionIcon from '@material-ui/icons/Extension'
import { useSelector } from 'react-redux'
import QUESTIONS from 'core/questions'
import actions from 'store/actions'
import history from 'core/history'


export default function Home() {
  const questionIds = Object.keys(QUESTIONS)
  const { questionId, results } = useSelector(() => actions.get('gdd', {}))
  const { options = [] } = _.get(QUESTIONS, questionId, {})
  const completed = options.some((id) => _.get(results, id))

  React.useEffect(() => {
    actions.set('gdd.questionId', _.first(questionIds))
  }, []) // eslint-disable-line

  React.useEffect(() => {
    const firstId = _.first(options)
    if (questionId && !completed) {
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

  const isLastQuation = questionId === _.last(filteredIds)

  const clearResults = () => {
    const allOptions = afterIds.reduce((acc, id) => {
      const { options = [] } = _.get(QUESTIONS, id, {})
      return [...acc, ...options]
    }, [])
    actions.set('gdd.results', _.omit(results, allOptions))
  }

  return (
    <div
      style={{
        height: '90vh',
        maxHeight: 400,
        display: 'flex'
      }}
    >
      <Card
        style={{
          padding: 10,
          margin: 5,
          display: 'flex',
          flexDirection: 'column',
          width: '30vw',
          maxWidth: 225
        }}
      >
        {filteredIds.map((id) => {
          const isFirst = _.first(filteredIds) === id
          const { options = [] } = _.get(QUESTIONS, id, [])
          const filteredOptions = options.filter((optionId) => _.get(results, optionId))
          const selected = id === questionId
          return (
            <Button
              key={id}
              variant="outlined"
              color={selected ? 'secondary' : 'primary'}
              style={{
                margin: 4
              }}
              disabled={!isFirst && _.isEmpty(filteredOptions)}
              onClick={() => actions.set('gdd.questionId', id)}
            >
              {id}
            </Button>
          )
        })}
      </Card>
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
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              alignContent: 'flex-start'
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
                    clearResults()
                    actions.update(`gdd.results.${id}`, (toggle) => !toggle)
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 5
                    }}
                  >
                    <ExtensionIcon />
                    {id}
                  </div>
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
          {!isLastQuation &&
            <Button
              style={{ margin: 4 }}
              color="primary"
              variant="contained"
              disabled={!completed}
              onClick={() => {
                clearResults()
                actions.set('gdd.questionId', nextId)
              }}
            >
              Next
            </Button>
          }
          {isLastQuation &&
            <Button
              style={{ margin: 4 }}
              color="secondary"
              variant="contained"
              disabled={!completed}
              onClick={() => {
                history.push('/results')
              }}
            >
              Finish
            </Button>
          }
        </CardActions>
      </Card>
    </div>
  )
}