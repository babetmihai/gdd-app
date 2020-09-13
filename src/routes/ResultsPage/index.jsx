import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import actions from 'store/actions'
import { Card, Button } from '@material-ui/core'
import RESULT_TEMPLATE from './template'
import { generateDocx } from './actions'
import ResultNode from './ResultNode'

export default function ResultsPage() {
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
      <div
        style={{
          margin: 2,
          fontFamily: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          flex: 'none'
        }}
      >
        <Button
          style={{ alignSelf: 'flex-start' }}
          onClick={() => generateDocx({ results })}
        >
          Download
        </Button>
        {RESULT_TEMPLATE.map((node, index) => (
          <Fragment key={index}>
            <ResultNode
              node={node}
              results={results}
            />
            <br />
          </Fragment>
        ))}
      </div>
    </Card>
  )
}
