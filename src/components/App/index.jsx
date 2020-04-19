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
      selection: {}
    })
  }, [])

  const { nodeIds, selection, nodes } = props
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
              onChange={() => {
                actions.set(`selection.${id}`, (value) => !value)
              }}
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
            const nextNodes = options.filter((id) => !!selection[id])
            actions.set('nodeIds', _.uniq([...nodeIds, nextId, ...nextNodes]
              .filter((id) => id !== nodeId)
              .map((id) => {
                const { options, nextId } = _.get(nodes, id, {})
                if (!options) return nextId
                return id
              })
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

export default connect(() => actions.get())(App)
