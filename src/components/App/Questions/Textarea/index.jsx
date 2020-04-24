import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Textarea({ onChange, value }) {

  return (
    <Form.Group className={styles.textarea}>
      <Form.Control as="textarea"
        autoFocus
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Form.Group>
  )
}
