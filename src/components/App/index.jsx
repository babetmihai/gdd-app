import React from 'react'
import _ from 'lodash'
import actions from 'store/actions'
import questions from './questions'
import { connect } from 'react-redux'

function App(props) {
  React.useEffect(() => {
    actions.set({
      nodeIds: [ 'rpg', 'shooter', 'moba'],
      nodes: questions,
      selection: { rpg: true, shooter: true }
    })
  }, [])

  const { nodeIds, selection, nodes } = props
  const nodeId = _.first(nodeIds)
  const { next = [] } = _.get(nodes, nodeId, {})

  return (
    <div>
      <h4>{nodeId}</h4>
      <form>
        {next.map((id) => (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={!!selection[id]}
              onChange={() => actions.update(`selection.${id}`, (value) => !value)}
            />
            <label htmlFor={id}>{id}</label>
          </div>
        ))}
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            const nextNodeIds = [...nodeIds, ...next]
              .filter((id) => id !== nodeId && !!selection[id])
            actions.set('nodeIds', _.uniq(nextNodeIds))
          }}
        >
          next
        </button>
      </form>
    </div>
  )
}

export default connect(() => actions.get())(App)
