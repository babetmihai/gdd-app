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
      history: {}
    })
  }, [])

  const [checked, setChecked] = React.useState({})

  const { nodeId, nodes, history } = props
  const { options = [], nextId } = _.get(nodes, nodeId, {})
  const filteredOptions = filterOptions({ options, nodes, history })

  return (
    <div>
      <h4 onClick={() => actions.set('nodeId', 'gameType')}>{nodeId}</h4>
      <form>
        {filteredOptions.map((id) => (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={!!checked[id]}
              onChange={() => setChecked({ ...checked, [id]: !checked[id] })}
            />
            <label htmlFor={id}>
              {id}
            </label>
          </div>
        ))}
        {nextId &&
          <button
            type="submit"
            disabled={filteredOptions.every((id) => !checked[id])}
            onClick={(event) => {
              event.preventDefault()
              const selection = filteredOptions.filter((id) => checked[id])
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
  const { nodes, history } = actions.get()
  const { options = [], nextId } = _.get(nodes, id, {})
  const filteredOptions = filterOptions({ options, nodes, history })

  if (nextId && filteredOptions.length <= 1) {
    actions.set(`history.${id}`, filteredOptions)
    goToNode(nextId)

  } else {
    actions.set('nodeId', id)
  }

}

const filterOptions = ({ options, nodes, history = {} }) => {
  const selected = getSelected(history)
  return _.uniq(options)
    .filter((id) => {
      const { excludes, requires } = _.get(nodes, id, {})
      return (
        (!excludes || excludes.every((_id) => !selected.includes(_id))) &&
        (!requires || requires.every((_id) => selected.includes(_id)))
      )
    })
}

const getSelected = (history) => Object.values(history).flat()

export default connect(() => actions.get())(App)
