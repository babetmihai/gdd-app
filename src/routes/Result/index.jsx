import React from 'react'
import { connect } from 'react-redux'
import actions from 'store/actions'
import Page from 'components/Page'

function Result(props) {
  const { answers = {} } = props

  return (
    <Page>

    </Page>
  )
}

export default connect(() => actions.get())(Result)
