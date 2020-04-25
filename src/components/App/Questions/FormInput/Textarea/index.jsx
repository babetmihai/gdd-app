import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Textarea(props) {
  const { id, onChange, value = '' } = props
  React.useEffect(() => {
    onChange(value)
  }, [id]) // eslint-disable-line
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
