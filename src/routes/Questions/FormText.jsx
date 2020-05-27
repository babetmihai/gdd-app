import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import { submitAnswers } from 'core/gdd'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormText(props) {
  const { id, answer = {} } = props
  const [value, onChange] = React.useState()

  React.useEffect(() => {
    onChange(answer)
  }, [id]) // eslint-disable-line

  return (
    <Form className={styles.form}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.formText}>
        <Form.Control as="textarea"
          autoFocus
          value={_.get(value, id, '')}
          onChange={(event) => onChange({ [id]: event.target.value })}
        />
      </Form.Group>
      <Button
        size="lg"
        variant={_.isEmpty(value) ? 'outline-success' : 'success'}
        type="submit"
        disabled={_.isEmpty(value)}
        onClick={(event) => {
          event.preventDefault()
          submitAnswers({ id, value })
        }}
      >
        Next
      </Button>
    </Form>
  )
}
