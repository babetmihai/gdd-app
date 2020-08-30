import React from 'react'
import { useSelector } from 'react-redux'
import { t } from 'core/intl'
import actions from 'store/actions'
import template from './template'

export default function Results() {
  const { results = {} } = useSelector(() => actions.get('gdd', {}))

  return (
    <div> </div>
  )
}
