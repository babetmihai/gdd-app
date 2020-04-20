import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import actions from 'store/actions'
import questions from './questions'

function App(props) {
  React.useEffect(() => {
    actions.set({
      nodeIds: ['gameType'],
      nodes: questions,
      completed: {},
      selection: {}
    })
  }, [])

  const { nodeIds, selection, nodes, completed } = props
  const nodeId = _.first(nodeIds)
  const { options = [] } = _.get(nodes, nodeId, {})
  const filteredOptions = filterOptions({ options, nodes, completed, selection })

  return (
    <div>
      <h4>{nodeId}</h4>
      <form>
        {filteredOptions.map((id) => (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={!!selection[id]}
              onChange={() => actions.update(`selection.${id}`, (value) => !value)}
            />
            <label htmlFor={id}>
              {id}
            </label>
          </div>
        ))}
        <button
          type="submit"
          disabled={!filteredOptions.some((id) => selection[id])}
          onClick={(event) => {
            event.preventDefault()
            const nextNodes = filteredOptions.filter((id) => selection[id])
            actions.set(`completed.${nodeId}`, nextNodes)
            actions.set(
              'nodeIds',
              _.uniq([...nodeIds, ...nextNodes]
                .filter((id) => id !== nodeId)
                .map((id) => getNext({ id, nodes, completed }))
                .filter(Boolean)
              )
            )
          }}
        >
          next
        </button>
      </form>
    </div>
  )
}

const filterOptions = ({ options, nodes, completed, selection }) => {
  return options
    .filter((id) => !completed[id])
    .filter((id) => {
      const { excludes, requires } = _.get(nodes, id, {})
      return (
        (!excludes || excludes.every((_id) => !selection[_id])) &&
        (!requires || requires.every((_id) => selection[_id]))
      )
    })
}

const getNext = ({ id, nodes, completed }) => {
  const { options, nextId } = _.get(nodes, id, {})
  if (completed[id]) return null
  if (!options && !nextId) return null
  if (options) return id
  if (nextId) return getNext({ id: nextId, nodes, completed })
  return id
}

export default connect(() => actions.get())(App)
