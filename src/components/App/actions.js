import _ from 'lodash'
import actions from 'store/actions'

export const filterOptions = ({ options, nodes, history = {} }) => {
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

export const submitNode = ({ id, value }) => {
  const { nodes, history } = actions.get()
  const { type, nextId } = _.get(nodes, id, {})

  const selection = mapSelection({ value, type })
  actions.set(`history.${id}`, selection)
  if (!_.isEqual(history[id], selection)) {
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

export const mapSelection = ({ value, type }) => {
  switch (type) {
    case ('input'): return value
    default: return Object.keys(value).filter((key) => value[key])
  }
}

const getSelected = (history) => Object.values(history).flat()
