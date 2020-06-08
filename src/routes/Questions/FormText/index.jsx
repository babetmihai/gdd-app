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
    <Form className={styles.formText}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.content}>
        <Form.Control as="textarea"
          autoFocus
          className={styles.textarea}
          value={_.get(value, id, '')}
          onChange={(event) => onChange({ [id]: event.target.value })}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={_.isEmpty(value)}
        className={styles.submitBtn}
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
