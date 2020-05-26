import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import { submitAnswers } from './actions'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormText(props) {
  const { id, onChange, value = {} } = props

  return (
    <Form className={styles.form}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.formText}>
        <Form.Control as="textarea"
          autoFocus
          value={_.get(value, id, '')}
          onChange={(event) => onChange({
            ...value,
            [id]: event.target.value
          })}
        />
      </Form.Group>
      <Button
        size="lg"
        variant={_.isEmpty(value) ? 'outline-success' : 'success'}
        type="submit"
        disabled={_.isEmpty(value)}
        onClick={() => submitAnswers({ id, value })}
      >
        Next
      </Button>
    </Form>
  )
}
