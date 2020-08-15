import React from 'react'
import { useSelector } from 'react-redux'
import actions from 'store/actions'


export default function Results() {
  const { results } = useSelector(() => actions.get('gdd', {}))

  return (
    <div
      style={{
        height: '90vh',
        maxHeight: 400,
        display: 'flex'
      }}
    >
      {Object.keys(results).map((result) => (
        <span key={result}>
          {result}
        </span>
      ))}
    </div>
  )
}