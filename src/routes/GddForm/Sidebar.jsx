import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import QUESTIONS from './questions'
import actions from 'store/actions'
import { Button, Card } from '@material-ui/core'

export default function Sidebar() {
  const questionIds = Object.keys(QUESTIONS)
  const { questionId, results } = useSelector(() => actions.get('gdd', {}))
  const filteredIds = questionIds.filter((id) => {
    const { requires } = _.get(QUESTIONS, id, {})
    return !requires || _.get(results, requires)
  })

  return (
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
  )
}
