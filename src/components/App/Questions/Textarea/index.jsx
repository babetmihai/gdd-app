import React from 'react'
import { Form } from 'react-bootstrap'
export default function Textarea({ onChange, value }) {

  return (
    <Form.Group>
      <Form.Control as="textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Form.Group>
  )
}
