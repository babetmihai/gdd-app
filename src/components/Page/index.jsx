import React from 'react'

export default function Page(props) {

  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}