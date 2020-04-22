import _ from 'lodash'
import actions from 'store/actions'

export const filterOptions = ({ options, nodes, history = {} }) => {
  return _.uniq(options)
    .filter((id) => {
      const { excludes, requires } = _.get(nodes, id, {})
      return (
        (!excludes || excludes.every((_id) => !isSelected(_id, history))) &&
        (!requires || requires.every((_id) => isSelected(_id, history)))
      )
    })
}

const isSelected = (id, history) => Object.values(history)
  .some((value) => _.get(value, id))

export const submitNode = ({ id, value }) => {
  const { nodes, history } = actions.get()
  const { nextId } = _.get(nodes, id, {})

  actions.set(`history.${id}`, value)
  if (!_.isEqual(history[id], value)) {
    deleteHistory(nextId)
  }
  goToNode(nextId)
}

const deleteHistory = (id) => {
  const { nodes, history } = actions.get()
  const { nextId } = _.get(nodes, id, {})

  if (history[id]) {
    actions.unset(`history.${id}`)
    if (nextId) deleteHistory(nextId)
  }
}

const goToNode = (id) => {
  const { nodes, history } = actions.get()
  const { type, options = [], nextId } = _.get(nodes, id, {})
  const filteredOptions = filterOptions({ options, nodes, history })

  if (nextId && type !== 'input' && filteredOptions.length <= 1) {
    actions.set(`history.${id}`, filteredOptions)
    goToNode(nextId)

  } else {
    actions.set('nodeId', id)
  }
}
