import React from 'react'
import { connect } from 'react-redux'
import { submitNode, filterOptions } from './actions'
import _ from 'lodash'
import actions from 'store/actions'
import data from './data'
import styles from './index.module.scss'
import Select from './Select'
import Textarea from './Textarea'

function App(props) {
  React.useEffect(() => {
    actions.set({
      nodeId: 'gameType',
      nodes: data,
      history: {}
    })
  }, [])

  const { nodeId, nodes, history = {} } = props
  const { type, options = [], nextId } = _.get(nodes, nodeId, {})
  const filteredOptions = filterOptions({ options, nodes, history })

  const [value, onChange] = React.useState({})
  React.useEffect(() => {
    onChange(_.get(history, nodeId))
  }, [nodeId]) // eslint-disable-line

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        {Object.keys(history)
          .filter((id) => !_.isEmpty(_.get(history, id)))
          .map((id) => {
            return (
              <div
                key={id}
                onClick={() => actions.set('nodeId', id)}
              >
                {id}
              </div>
            )
          })}
      </div>
      <div className={styles.content}>
        <h4>{nodeId}</h4>
        <form>
          {type === 'input'
            ? (
              <Textarea
                value={value}
                onChange={onChange}
              />
            )
            : (
              <Select
                options={filteredOptions}
                value={value}
                multiple
                onChange={onChange}
              />
            )
          }
          {nextId &&
            <button
              type="submit"
              disabled={_.isEmpty(value)}
              onClick={(event) => {
                event.preventDefault()
                onChange(undefined)
                submitNode({ id: nodeId, value })
              }}
            >
              next
            </button>
          }
        </form>
      </div>
    </div>

  )
}

export default connect(() => actions.get())(App)
