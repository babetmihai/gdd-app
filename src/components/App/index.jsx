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
  const { options = [], nextId } = _.get(nodes, nodeId, {})

  return (
    <div>
      <h4>{nodeId}</h4>
      <form>
        {options.map((id) => (
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
          onClick={(event) => {
            event.preventDefault()
            actions.set(`completed.${nodeId}`, true)
            const nextNodes = options.filter((id) => !!selection[id])
            actions.set('nodeIds', _.uniq([...nodeIds, nextId, ...nextNodes]
              .filter((id) => id !== nodeId)
              .map((id) => getNext(id, nodes, completed))
              .filter(Boolean)
            ))
          }}
        >
          next
        </button>
      </form>
    </div>
  )
}

const getNext = (id, nodes, completed) => {
  const { options, nextId } = _.get(nodes, id, {})
  if (completed[id]) return null
  if (!options && !nextId) return null
  if (!options && nextId) return getNext(nextId, nodes, completed)
  return id
}

export default connect(() => actions.get())(App)
