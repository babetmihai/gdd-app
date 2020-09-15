import React from 'react'
import _ from 'lodash'
import { Typography, Button, Paper } from '@material-ui/core'
import { t } from 'core/intl'
import ExtensionIcon from '@material-ui/icons/Extension'
import { useSelector } from 'react-redux'
import QUESTION_TEMPLATE from './template'
import actions from 'store/actions'
import history from 'core/history'


export default function Home() {
  const questionIds = Object.keys(QUESTION_TEMPLATE)
  const { questionId, results } = useSelector(() => actions.get('gdd', {}))
  const { options = [] } = _.get(QUESTION_TEMPLATE, questionId, {})
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
    const { requires } = _.get(QUESTION_TEMPLATE, id, {})
    return !requires || _.get(results, requires)
  })
  const questionIndex = filteredIds.indexOf(questionId)
  const lastId = _.get(filteredIds, questionIndex - 1)
  const afterIds = filteredIds.slice(questionIndex + 1)
  const nextId = _.first(afterIds)

  const isLastQuation = questionId === _.last(filteredIds)

  const clearResults = () => {
    const allOptions = afterIds.reduce((acc, id) => {
      const { options = [] } = _.get(QUESTION_TEMPLATE, id, {})
      return [...acc, ...options]
    }, [])
    actions.set('gdd.results', _.omit(results, allOptions))
  }

  return (
    <div
      style={{
        height: '95vh',
        maxHeight: 400,
        display: 'flex'
      }}
    >
      <div
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
          const { options = [] } = _.get(QUESTION_TEMPLATE, id, [])
          const filteredOptions = options.filter((optionId) => _.get(results, optionId))
          const selected = id === questionId
          return (
            <Button
              key={id}
              component={Paper}
              color={selected ? 'secondary' : 'primary'}
              style={{
                margin: 7,
                padding: '.35em 1.35em',
                fontSize: 18
              }}
              disabled={!isFirst && _.isEmpty(filteredOptions)}
              onClick={() => actions.set('gdd.questionId', id)}
            >
              {id}
            </Button>
          )
        })}
      </div>
      <div
        style={{
          margin: 5,
          display: 'flex',
          flexDirection: 'column',
          width: '60vw',
          maxWidth: 750
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center'
          }}
        >
          <Typography
            variant="h4"
            style={{ margin: 7, marginBottom: 4 }}
          >
            {t(questionId)}
          </Typography>
          <Typography
            variant="p"
            style={{ margin: 7, marginBottom: 10 }}
          >
            {t(`${questionId}_description`)}
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
                    margin: 7,
                    padding: '.35em 1.35em',
                    fontSize: 24
                  }}
                  component={Paper}
                  color={selected ? 'secondary' : undefined}
                  size="large"
                  key={id}
                  onClick={() => {
                    clearResults()
                    actions.update('gdd.results', (_results) => {
                      const newResults = _.clone(_results)
                      options.forEach((_option) => {
                        if (_option === id) {
                          _.set(newResults, _option, true)
                        } else {
                          _.unset(newResults, _option)
                        }
                      })
                      return newResults
                    })
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
                    <ExtensionIcon style={{ margin: 3, fontSize: 32 }} />
                    {id}
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            style={{ margin: 4 }}
            color="primary"
            variant="outlined"
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
        </div>
      </div>
    </div>
  )
}