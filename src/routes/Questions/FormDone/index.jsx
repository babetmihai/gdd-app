import React from 'react'
import { t } from 'core/intl'
import { submitForm } from 'core/gdd'
import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormDone() {
  return (
    <>
      <h2>{t('you_are_done')}</h2>
      <Button
        variant="primary"
        type="submit"
        className={styles.submitBtn}
        onClick={(event) => {
          event.preventDefault()
          submitForm()
        }}
      >
        Get Results
      </Button>
    </>
  )
}
