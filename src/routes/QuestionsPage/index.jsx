import React from 'react'
import _ from 'lodash'
import { Typography, Button, Paper, IconButton } from '@material-ui/core'
import { t } from 'core/intl'
import ExtensionIcon from '@material-ui/icons/Extension'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import Page from 'core/layout/Page'
import { useSelector } from 'react-redux'
import QUESTION_TEMPLATE from './template'
import actions from 'store/actions'
import history from 'core/history'
import styles from './index.module.scss'


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
    <Page>
      <div className={styles.header}>
        <Typography
          variant="h4"
          className={styles.title}
        >
          {t(`select_${questionId}`)}
        </Typography>
        <div className={styles.breadcrumbs}>
          {filteredIds.map((id) => {
            const isFirst = _.first(filteredIds) === id
            const { options = [] } = _.get(QUESTION_TEMPLATE, id, [])
            const filteredOptions = options.filter((optionId) => _.get(results, optionId))
            const selected = id === questionId
            return (
              <IconButton
                size="small"
                key={id}
                color={selected ? 'secondary' : 'primary'}
                disabled={!isFirst && _.isEmpty(filteredOptions)}
                onClick={() => actions.set('gdd.questionId', id)}
              >
                <FiberManualRecord />
              </IconButton>
            )
          })}
        </div>
      </div>
      <div className={styles.content}>
        {options.map((id) => {
          const selected = _.get(results, id)
          return (
            <Button
              className={styles.option}
              component={Paper}
              elevation={3}
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
              <div className={styles.optionContent}>
                <ExtensionIcon className={styles.icon} />
                {t(id)}
              </div>
            </Button>
          )
        })}
      </div>
      <div className={styles.footer}>
        {!isLastQuation &&
          <Button
            size="large"
            className={styles.nextButton}
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
            size="large"
            className={styles.nextButton}
            color="secondary"
            variant="contained"
            disabled={!completed}
            onClick={() => {
              history.push('/results')
            }}
          >
            Done
          </Button>
        }
      </div>
    </Page>
  )
}