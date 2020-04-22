import React from 'react'

export default function Textarea({ onChange, value }) {

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
