import React from 'react'
import _ from 'lodash'
import questions from './questions'

function App() {
  const [activeNodes, setActiveNodes] = React.useState(['gameType'])
  const [nodeId, setNodeId] = React.useState('gameType')
  const { next = [], wait } = _.get(questions, nodeId, {})
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
              const nextId = (wait && activeNodes.length > 1)
                ? _.first(filteredActive)
                : id

              setActiveNodes(_.uniq([...filteredActive, id]))
              if (questions[nextId].next.length === 1) {
                setNodeId(_.first(questions[nextId].next))
              } else {
                setNodeId(nextId)
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
