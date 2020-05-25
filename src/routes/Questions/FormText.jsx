import React from 'react'
import { t } from 'core/intl'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormText(props) {
  const { id, onChange, value = '' } = props
  React.useEffect(() => {
    onChange(value)
  }, [id]) // eslint-disable-line
  return (
    <Form className={styles.form}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.formText}>
        <Form.Control as="textarea"
          autoFocus
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </Form.Group>
    </Form>
  )
}
