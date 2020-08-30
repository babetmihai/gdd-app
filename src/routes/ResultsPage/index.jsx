import React from 'react'
import { useSelector } from 'react-redux'
import actions from 'store/actions'
import { Card } from '@material-ui/core'
import template from './template'
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
        {template.map((node, index) => (
          <ResultNode
            node={node}
            key={index}
            results={results}
          />
        ))}
      </div>
    </Card>
  )
}
