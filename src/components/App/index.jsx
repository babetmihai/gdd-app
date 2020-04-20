import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import actions from 'store/actions'
import questions from './questions'

function App(props) {
  React.useEffect(() => {
    actions.set({
      nodeId: 'gameType',
      nodes: questions,
      history: {},
      selected: {}
    })
  }, [])

  const { nodeId, nodes, selected } = props
  const { options = [], nextId } = _.get(nodes, nodeId, {})
  const filteredOptions = filterOptions({ options, nodes, selected })

  return (
    <div>
      <h4>{nodeId}</h4>
      <form>
        {filteredOptions.map((id) => (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={!!selected[id]}
              onChange={() => actions.update(`selected.${id}`, (value) => !value)}
            />
            <label htmlFor={id}>
              {id}
            </label>
          </div>
        ))}
        {nextId &&
          <button
            type="submit"
            disabled={!filteredOptions.some((id) => selected[id])}
            onClick={(event) => {
              event.preventDefault()
              const selection = filteredOptions.filter((id) => selected[id])
              actions.set(`history.${nodeId}`, selection)
              goToNode(nextId)
            }}
          >
            next
          </button>
        }
      </form>
    </div>
  )
}

const goToNode = (id) => {
  const { nodes, selected } = actions.get()
  const { options = [], nextId } = _.get(nodes, id, {})
  const filteredOptions = filterOptions({ options, nodes, selected })

  switch (true) {
    case (!nextId): {
      actions.set('nodeId', id)
      break
    }
    case (filteredOptions.length === 1): {
      const [optionId] = filteredOptions
      actions.set(`history.${id}`, filteredOptions)
      actions.update(`selected.${optionId}`, (value) => !value)
      goToNode(nextId)
      break
    }
    case (filteredOptions.length === 0): {
      goToNode(nextId)
      break
    }
    default: {
      actions.set('nodeId', id)
    }
  }
}

const filterOptions = ({ options, nodes, selected }) => {
  return _.uniq(options
    .filter((id) => {
      const { excludes, requires } = _.get(nodes, id, {})
      return (
        (!excludes || excludes.every((_id) => !selected[_id])) &&
        (!requires || requires.every((_id) => selected[_id]))
      )
    }))
}

export default connect(() => actions.get())(App)
