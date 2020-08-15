import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { t } from 'core/intl'
import actions from 'store/actions'
import { Card, Typography } from '@material-ui/core'


export default function Results() {
  const { results = {} } = useSelector(() => actions.get('gdd', {}))

  return (
    <Card
      style={{
        padding: 13,
        height: '90vh',
        maxWidth: 835,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}
    >
      {Object.keys(results).map((result) => (
        <div
          key={result}
          style={{
            margin: 2,
            fontFamily: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            flex: 'none'
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
          >
            {result}
          </Typography>
          <p>
            {t(`results.${result}`).split('\n').map((item, index) => (
              <Fragment key={index}>
                {item}
                <br />
              </Fragment>
            ))}
          </p>
          <br />
        </div>
      ))}
    </Card>
  )
}