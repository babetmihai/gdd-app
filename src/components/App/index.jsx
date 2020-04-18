import React from 'react'
import _ from 'lodash'
import actions from 'store/actions'
import questions from './questions'
import { connect } from 'react-redux'

function App({ nodeId, nodeIds, nodes }) {
  React.useEffect(() => {
    actions.set('nodeId', 'rpg')
    actions.set('nodeIds', ['rpg', 'moba'])
    actions.set('nodes', questions)
  }, [])
  const { next = [] } = _.get(nodes, nodeId, {})
  return (
    <div>
      {nodeId}
      <div>list:</div>
      <div>
        {next.map((id) => (
          <div
            key={id}
            onClick={() => {
              const nextId = getNext({ id, nodes })
              actions.set('nodeId', nextId)
            }}
          >
            {id}
          </div>
        ))}
      </div>
    </div>
  )
}

const isSelection = ({ id, nodes }) => nodes[id].next.length > 1

const getNext = ({ id, nodes }) => {
  const selection = isSelection({ id, nodes })
  switch (true) {
    case (!selection):
      return getNext({ id: _.first(nodes[id].next), nodes })

    default: return id
  }
}

export default connect(() => ({
  nodeId: actions.get('nodeId'),
  nodeIds: actions.get('nodeIds'),
  nodes: actions.get('nodes')
}))(App)
