import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { t } from 'core/intl'
import actions from 'store/actions'
import { Card } from '@material-ui/core'


export default function Results() {
  const { results = {} } = useSelector(() => actions.get('gdd', {}))

  return (
    <Card
      style={{
        padding: 10,
        height: '90vh',
        maxHeight: 400,
        maxWidth: 835,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {Object.keys(results).map((result) => (
        <Fragment key={result}>
          <h5>{result}</h5>
          <p>{t(`results.${result}`)}</p>
        </Fragment>
      ))}
    </Card>
  )
}