import React from 'react'
import _ from 'lodash'
import questions from './questions'

function App() {
  const [activeNodes, setActiveNodes] = React.useState(['gameType'])
  const [nodeId, setNodeId] = React.useState('gameType')
  const { next = [], excludes = [], requries = [] } = _.get(questions, nodeId, {})
  return (
    <div>
      {nodeId}
      <div>list:</div>
      <div>
        {next.map((id) => (
          <div
            key={id}
            onClick={() => {
              const filteredActive = activeNodes.filter((activeNode) => activeNode !== nodeId)
              setActiveNodes(_.uniq([...filteredActive, id]))
              if (next.length > 1 || activeNodes.length === 1) {
                setNodeId(id)
              } else {
                setNodeId(_.first(filteredActive))
              }
            }}
          >
            {id}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
