import React from 'react'
import history from 'core/history'

export default function Home() {

  return (
    <div>
      gdoc gerenrator
      <button
        onClick={() => history.push('/questions')}
      >
        Start
      </button>
    </div>
  )
}