import React from 'react'
import _ from 'lodash'
import actions from 'store/actions'
import questions from './questions'
import { connect } from 'react-redux'

function App({ nodeId, nodeIds, selection, nodes }) {
  React.useEffect(() => {
    actions.set({
      nodeId: 'rpg',
      nodeIds: ['shooter'],
      nodes: questions,
      selection: { rpg: true, shooter: true }
    })
  }, [])
  const { next = [] } = _.get(nodes, nodeId, {})
  return (
    <div>
      {nodeId}
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
            const checked = next.filter((id) => !!selection[id])
            console.log(checked)
          }}
        >
          next
        </button>
      </form>
    </div>
  )
}

export default connect(() => actions.get())(App)
