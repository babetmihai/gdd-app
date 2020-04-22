import React from 'react'

export default function Textarea({ onChange, value }) {

  return (
    <div>
      <input
        checked={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
